#!/usr/bin/env python3
"""Build the informational-guide production tracker from the 300-topic plan."""

from __future__ import annotations

import csv
import glob
import re
from difflib import SequenceMatcher
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PLAN = ROOT / "Guide Infor" / "dannycamping_informational_guide_plan_300.csv"
TRACKER = ROOT / "Guide Infor" / "informational_guide_tracker.csv"


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def read_frontmatter(path: Path) -> dict[str, str]:
    source = path.read_text(encoding="utf-8-sig")
    match = re.match(r"^---\s*\n(.*?)\n---", source, re.S)
    if not match:
        return {}
    fields: dict[str, str] = {}
    for line in match.group(1).splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        fields[key.strip()] = value.strip().strip('"')
    return fields


with PLAN.open(encoding="utf-8-sig", newline="") as handle:
    plan = list(csv.DictReader(handle))

published = []
for filename in glob.glob(str(ROOT / "Guide Infor" / "*" / "[0-9][0-9]-*.md")):
    data = read_frontmatter(Path(filename))
    if data.get("title") and data.get("slug"):
        published.append(data)

published_by_slug = {item["slug"].strip("/"): item for item in published}
published_by_title = {normalize(item["title"]): item for item in published}

extra_fields = [
    "Implementation_Status",
    "Matched_Live_Slug",
    "Match_Confidence",
    "Canonical_Silo",
    "Canonical_URL",
    "Scope_Boundary",
    "Word_Count",
    "Image_Count",
    "Image_License_Checked",
    "Outgoing_Internal_Links",
    "Incoming_Internal_Links",
    "Primary_Sources_Checked",
    "Similarity_Check",
    "Local_QA",
    "Published_Commit",
]

for row in plan:
    planned_slug = row["Suggested_Slug"].strip("/")
    title_key = normalize(row["Article_Title"])
    match = published_by_slug.get(planned_slug) or published_by_title.get(title_key)
    confidence = ""
    status = "Planned"

    if match:
        status = "Published"
        confidence = "Exact slug" if match["slug"].strip("/") == planned_slug else "Exact title"
    else:
        candidates = sorted(
            (
                (SequenceMatcher(None, title_key, normalize(item["title"])).ratio(), item)
                for item in published
            ),
            key=lambda pair: pair[0],
            reverse=True,
        )
        score, candidate = candidates[0]
        if score >= 0.72:
            match = candidate
            status = "Manual overlap review"
            confidence = f"Title similarity {score:.2f}"

    row.update({field: "" for field in extra_fields})
    row["Implementation_Status"] = status
    if match:
        row["Matched_Live_Slug"] = match["slug"].strip("/")
        row["Match_Confidence"] = confidence

with TRACKER.open("w", encoding="utf-8-sig", newline="") as handle:
    writer = csv.DictWriter(handle, fieldnames=list(plan[0].keys()))
    writer.writeheader()
    writer.writerows(plan)

counts: dict[str, int] = {}
for row in plan:
    key = row["Implementation_Status"]
    counts[key] = counts.get(key, 0) + 1

print(f"Wrote {TRACKER.relative_to(ROOT)}")
for key, value in sorted(counts.items()):
    print(f"{key}: {value}")
