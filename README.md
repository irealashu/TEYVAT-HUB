# TEYVAT-HUB
MASTER PROMPT: TEYVAT HUB
PROJECT OBJECTIVE

Build TEYVAT HUB, an immersive, premium-quality, anime-style Genshin Impact companion website that brings the entire game encyclopedia, character database, build calculator, weapon database, artifact database, interactive map, farming planner, wish tracker, lore library, news portal, and collection tracker into one unified platform.

The website must combine the visual beauty of an anime fantasy world with the data accuracy of a comprehensive gaming wiki and the utility of a professional gaming toolkit.

Historical data cutoff: Genshin Impact Version 7.1 inclusive, released September 23, 2026.

The website must contain actual game records and numeric values through this cutoff wherever verified data is available. It must not substitute fabricated counts, generic placeholder records, invented character stats, or fictional game information for real data.

Build a functioning application, not merely a static landing page or UI mockup.

PART 1 — DESIGN AND VISUAL IDENTITY
1.1 Branding

Website name: TEYVAT HUB

Tagline: Your Complete Gateway to Teyvat.

Secondary tagline: Explore. Discover. Build. Conquer.

Create an original fantasy-inspired logo incorporating celestial stars, elemental motifs, elegant lettering, and subtle magical details.

The overall aesthetic should evoke a beautiful anime fantasy adventure, celestial skies, magical landscapes, and an elegant RPG interface.

1.2 Visual style

Use:

Celestial blue, white, cyan, lavender, gold, midnight navy, and soft pastel accents.
Region-specific accent colors.
Anime-inspired fantasy illustrations and landscapes.
Subtle glassmorphism and translucent panels.
Fine borders, soft shadows, rounded cards, and elegant gradients.
Floating particles, tiny stars, magical effects, and restrained parallax.
Smooth page transitions and subtle hover animations.
Beautiful typography pairing fantasy-style headings with readable body text.
Premium character portraits and visually consistent item artwork.
Light and dark themes.
Responsive layouts for desktop, tablet, and mobile.

Create a cinematic homepage with the atmosphere of entering Teyvat through a magical gateway.

Avoid excessive neon, visual clutter, oversized empty spaces, generic dashboard templates, and unnecessary animation.

Use properly licensed, authorized, or original artwork. Do not assume all publicly accessible game images are free to redistribute.

PART 2 — VERIFIED VERSION 7.1 DATASET
2.1 Historical scope

Include all supported Genshin Impact content released from Version 1.0 through Version 7.1 inclusive.

Include characters, items, mechanics, regions, quests, events, and other records introduced during that period.

Do not include content introduced after Version 7.1 in the historical database unless it is explicitly identified as a separate newer dataset.

Maintain a version selector that allows users to browse supported historical data snapshots.

If only current data is available, label historical reconstruction as unavailable rather than inventing old values.

2.2 Required data sources

Use the following sources and verify their actual coverage before importing:

Structured game data: https://github.com/theBowja/genshin-db
Community game API: https://genshin.jmp.blue
Official Genshin Impact website: https://genshin.hoyoverse.com
HoYoLAB: https://www.hoyolab.com
Community reference database: https://genshin-impact.fandom.com
Character reference: https://www.hoyodex.com/wiki/genshin-impact/characters-list
Release changelog reference: https://gi.gachabase.net/changelog/release

Prefer structured datasets for large-scale imports, official announcements for version and event verification, and independent sources for cross-checking conflicting values.

Do not assume that every source contains every category or preserves complete historical data.

2.3 Import every supported category

Populate the database with all verified records available through Version 7.1:

Playable characters.
Traveler variants and alternate playable forms, with explicit counting rules.
Character base statistics and level progression.
Character ascension bonuses and materials.
Normal attacks, elemental skills, elemental bursts, and passive talents.
Talent level multipliers and upgrade costs.
Constellations and constellation effects.
Weapons of every supported type and rarity.
Weapon statistics, level progression, secondary stats, passives, and refinements.
Artifact sets and individual artifact pieces.
Artifact two-piece and four-piece bonuses.
Character and weapon enhancement materials.
Talent books, boss drops, enemy drops, local specialties, ores, and other materials.
Normal enemies, elite enemies, bosses, and weekly bosses.
Enemy statistics, resistances, drops, and combat information when verified.
Domains, rewards, and availability schedules.
Nations, regions, subregions, and locations.
Teleport waypoints and interactive-map points where verified.
Archon Quests, Story Quests, World Quests, and other supported quest records.
Achievements and documented rewards.
Food, recipes, ingredients, effects, and special dishes.
Gadgets, furnishings, collectibles, and other catalogue items.
Fishing records and Genius Invokation TCG cards where supported.
Outfits and cosmetic items.
Version history, release dates, banners, events, and version-specific changes.
Available localization data, original names, translations, descriptions, icons, and image references.

Do not mark a category as complete just because a handful of records have been imported.

PART 3 — ACTUAL COUNTS AND NUMERICAL ACCURACY
3.1 Count all records from the imported dataset

Do not invent the number of characters, weapons, artifacts, enemies, materials, quests, achievements, or other items.

Compute the counts from the imported and validated records.

The homepage and database pages must display actual totals such as:

Total playable characters.
Total character variants.
Total weapons.
Total artifact sets.
Total individual artifact pieces, if available.
Total materials.
Total enemies.
Total bosses.
Total domains.
Total quests.
Total achievements.
Total recipes.
Total regions and supported map locations.
Total TCG cards.
Total outfits.
Total imported records across all categories.

Only display a total if its underlying category has been imported and counted.

For each category, record:

Total imported.
Total verified for Version 7.1.
Total with missing fields.
Total requiring review.
Total introduced in each supported version, where historical records exist.
3.2 Define counting rules

Character counts must distinguish playable characters from NPCs, character skins, Traveler variants, and other alternate forms.

Weapon counts must distinguish unique weapon identities from refinement ranks and weapon levels.

Artifact counts must distinguish artifact sets from individual flower, plume, sands, goblet, and circlet items.

Material counts must distinguish unique material identities from inventory quantities and rarity variants.

Quest counts must distinguish quests, quest steps, chapters, and individual objectives.

Achievement counts must distinguish achievements from their associated reward records.

Do not inflate totals by counting translations, duplicated identifiers, individual stat rows, or the same entity from multiple sources as separate game items.

Provide a data methodology page explaining all counting rules.

3.3 Exact numeric data

Import actual values rather than approximate values.

For characters, include:

Base HP.
Base ATK.
Base DEF.
Level-by-level progression where available.
Ascension bonus.
Ascension thresholds.
Elemental mastery and other relevant stats when applicable.
Talent multipliers at supported talent levels.
Constellation numerical effects.
Talent and ascension material quantities.
Mora and experience requirements when verified.

For weapons, include:

Rarity.
Weapon type.
Base ATK.
Secondary-stat type and values.
Level progression.
Ascension requirements.
Passive ability.
Refinement values for R1, R2, R3, R4, and R5.
Mora and enhancement requirements where available.

For artifacts, include:

Set name.
Piece type.
Rarity.
Two-piece bonus.
Four-piece bonus.
Exact numerical values and percentages.
Acquisition domain or source.
Available historical versions where documented.

For materials, include:

Rarity.
Category.
Quantity required for upgrades.
Crafting and conversion recipes.
Source enemies, bosses, domains, or locations.
Regional availability.
Mora costs where documented.

For enemies, include:

Enemy identity.
Level-dependent HP, ATK, and DEF where available.
Resistances.
Drops.
Boss mechanics and other supported combat information.

For all categories, preserve the source's precision and units.

Never replace a missing number with zero. Never silently substitute a maximum-level stat for a level-one stat. Never extrapolate an undocumented value without identifying the calculation and formula.

PART 4 — DATA MODEL AND IMPORT PIPELINE
4.1 Database structure

Create structured database tables or equivalent typed models for:

characters
character_variants
character_stats
character_ascension
talents
talent_levels
constellations
weapons
weapon_stats
weapon_refinements
artifacts
artifact_pieces
artifact_effects
materials
recipes
enemies
enemy_stats
bosses
domains
quests
achievements
regions
locations
events
banners
versions
tcg_cards
outfits
sources
import_jobs

Use stable identifiers, typed numeric columns, relationships, and uniqueness constraints.

Separate imported game data from user accounts, saved builds, favorites, and completion progress.

4.2 Version metadata

Every imported entity should include, where available:

source_id
slug
introduced_version
introduced_date
last_modified_version
source_url
source_revision
verified_at
data_status

Support these statuses:

Verified
Imported
Needs Review
Missing
Conflicting
Historical Data Unavailable
4.3 Automated import process

Implement an actual repeatable data import pipeline:

Fetch or download supported source datasets.
Record source revision and retrieval time.
Parse the data.
Normalize identifiers and numerical values.
Import the records into the database.
Detect duplicates and conflicting values.
Validate references between entities.
Record missing fields.
Update existing records safely.
Generate an import report.
Run automated tests.
Publish validated records to the website.

Use caching and respect source rate limits.

If the environment cannot access a source or execute the import, explain the limitation and provide the exact files or scripts required to finish the import. Do not pretend that the database has been populated when it has not.

PART 5 — COMPLETE WEBSITE PAGES

Generate all of the following routes:

/ — Home dashboard.
/characters — Character database.
/characters/[slug] — Individual character pages.
/builds — Build library.
/weapons — Weapon database.
/weapons/[slug] — Weapon detail pages.
/artifacts — Artifact database.
/teams — Team builder.
/map — Interactive map.
/materials — Material encyclopedia and farming planner.
/wishes — Wish tracker.
/regions — Region encyclopedia.
/quests — Quest library.
/lore — Lore encyclopedia.
/enemies — Enemy database.
/bosses — Boss database.
/domains — Domain database.
/achievements — Achievement tracker.
/recipes — Food and recipe database.
/tcg — TCG card encyclopedia.
/outfits — Outfit gallery.
/news — News and updates.
/community — Community hub.
/settings — User preferences.
/about — About and data methodology.
/sources — Data sources and attribution.
/privacy — Privacy policy.
/admin/data-quality — Restricted data-quality dashboard.

Every route must contain real page structure, useful content, working navigation, appropriate metadata, and responsive layouts.

PART 6 — HOMEPAGE AND NAVIGATION

Create a cinematic homepage with:

A Teyvat-inspired fantasy hero background.
The heading "WELCOME, TRAVELER."
The tagline "Everything in Teyvat, all in one place."
Buttons for Explore Characters, Discover Builds, and Open the Interactive Map.
A global search bar.
Featured character cards.
Nation and region cards.
Featured builds.
Recently updated records.
Version 7.1 information.
News and event summaries.
A daily adventurer dashboard.
Live counts calculated from the imported database.
Quick links to all core tools.

Include a sticky navigation bar with:

Home, Characters, Builds, Weapons, Artifacts, Teams, Regions, Interactive Map, Quests & Lore, News & Events, Tools, and Community.

Provide a responsive mobile menu, favorites, search, theme toggle, and optional user profile.

Do not show fictional live banners, fabricated current events, or invented redemption codes.

PART 7 — CHARACTER DATABASE

Build a complete searchable character encyclopedia.

Filters must include:

Name.
Element.
Weapon type.
Rarity.
Region.
Combat role.
Release version.

Each character page must contain:

Artwork.
Name and identifiers.
Rarity, element, weapon, and region.
Base statistics and level progression.
Ascension stats and materials.
Normal attack.
Elemental skill.
Elemental burst.
Passive talents.
Constellations.
Talent upgrade tables.
Recommended weapons.
Recommended artifact sets.
Main stats and substats.
Team compositions.
Farming materials.
Lore.
Gameplay information.

Provide accurate level and talent tables, including source attribution and version metadata.

Use exact imported values rather than generic examples.

PART 8 — WEAPON AND ARTIFACT DATABASES
Weapons

Display every imported weapon with its real name, rarity, type, icon, base ATK, secondary stat, passive, refinement values, level progression, ascension materials, and compatible characters.

Add filtering, sorting, comparisons, and detail pages.

Artifacts

Display every imported artifact set with:

Set name.
Individual piece names.
Rarity.
Exact two-piece effect.
Exact four-piece effect.
Farming location.
Recommended characters.
Main-stat and substat guidance.
Related builds.

Clearly distinguish actual artifact effects from editorial build recommendations.

PART 9 — CHARACTER BUILD CALCULATOR

Build an interactive calculator that supports:

Character selection.
Character level.
Talent levels.
Weapon selection and refinement.
Artifact set selection.
Main-stat and substat selection.
Constellation selection.
Enemy level and resistances when supported.
Team buffs and applicable combat bonuses.

Calculate and display supported values for:

HP.
ATK.
DEF.
Elemental Mastery.
Energy Recharge.
Critical Rate.
Critical Damage.
Elemental damage bonuses.
Relevant damage multipliers.
Estimated final damage.

Use documented game mechanics and exact source values.

Implement the actual calculation formulas and validate them against known examples. Clearly identify assumptions, conditional buffs, rounding rules, and unsupported mechanics.

Do not label a build calculator accurate unless its formulas and input data have been tested.

Allow users to save, compare, and share builds.

PART 10 — TEAM BUILDER

Create a four-character team-building tool.

Include:

Character selection.
Elemental resonance.
Elemental reaction compatibility.
Main DPS, sub-DPS, support, and healer roles.
Shielding and healing information where supported.
Recommended weapons and artifacts.
Suggested rotations where documented.
Team notes.
Saved and shareable team configurations.

Use real character data and clearly identify editorial recommendations.

PART 11 — INTERACTIVE MAP

Create a zoomable, searchable map interface containing verified locations where data is available.

Support:

Regions and subregions.
Teleport waypoints.
Domains.
Bosses.
Chests.
Collectibles.
Oculi.
Local specialties.
Ore deposits.
Farming routes.
Quest locations.

Add marker filters, progress checklists, custom notes, and saved routes.

Use licensed map assets or a legitimate map data source. If complete geographic data is unavailable, display the available coverage accurately and mark missing regions instead of presenting fabricated markers as real.

PART 12 — MATERIALS AND FARMING PLANNER

Allow users to choose a character, weapon, or talent upgrade target.

Inputs:

Current level.
Target level.
Current and target talent levels.
Materials already owned.
Weapon level and refinement goals where relevant.

Calculate:

Required materials.
Remaining quantities.
Upgrade costs.
Mora requirements.
Experience requirements.
Farming locations.
Domain schedules.
Boss requirements.
Regional specialties.

Base calculations on actual imported upgrade tables and crafting recipes.

Include a checklist, daily planner, and saved farming goals.

If an exact requirement is missing from the dataset, identify it as unavailable instead of guessing.

PART 13 — WISH TRACKER

Build a manual wish tracker with:

Character Event Wish.
Weapon Event Wish.
Standard Wish.
Pull history.
Five-star and four-star results.
User-entered pity count.
User-entered guarantee status.
Pull-count summaries.
Historical charts.
Export and import.

Use actual banner history only when verified.

Do not request game passwords or unauthorized credentials. Do not claim automatic account synchronization without a legitimate supported integration.

PART 14 — LORE, QUESTS, AND REGIONS

Create a searchable encyclopedia of:

Archon Quests.
Story Quests.
World Quests.
Character stories.
Regions and nations.
Factions.
Gods and ancient civilizations.
Historical events.
Books and in-game documents.
Creatures and enemies.

Add cross-linked articles, breadcrumbs, tags, related content, and spoiler controls.

Separate verified game lore from fan theories and community speculation.

PART 15 — ACHIEVEMENTS AND COLLECTION TRACKER

Include:

Achievement catalogue.
Character collection.
Weapon collection.
Exploration checklist.
Quest completion.
Regional progress.
Collectible tracking.
Personal notes.
Progress bars.
Completion percentages.

Calculate progress from real catalogue records and user-entered completion data.

Never claim synchronization with a game account unless a supported integration exists.

PART 16 — NEWS AND VERSION ARCHIVE

Build a news center with:

Official announcements.
Version update summaries.
Banner history.
Events.
Redeem codes.
Maintenance notices.
Developer livestreams.
Community guides.

Every article must include its source, publication date, and verification status.

Provide a historical version archive from Version 1.0 through Version 7.1 wherever reliable records exist.

Clearly mark unavailable historical details.

Expired codes must be labelled as expired. Do not invent current banners, rewards, or live game status.

PART 17 — COMMUNITY

Create:

Build-sharing pages.
Team showcases.
Community guides.
Fan-art galleries.
Discussions.
Community-created farming routes.
Bookmarks and favorites.

Use clearly labelled sample content during development.

For production, implement authentication, secure database policies, moderation, reporting, and server-side validation.

PART 18 — TECHNOLOGY STACK

Preferred stack:

Next.js.
React.
TypeScript.
Tailwind CSS.
shadcn/ui.
Lucide icons.
Framer Motion.
Recharts.
Supabase and PostgreSQL.
Zod.
Vitest.
Playwright.

Adapt to the website builder's supported stack where necessary.

Use reusable components, typed models, route-based pages, a clean project structure, and separate data-access modules.

Keep secrets server-side and use appropriate database permissions.

PART 19 — DATA QUALITY ADMINISTRATION

Build /admin/data-quality with access restrictions.

Display:

Imported record counts by category.
Counts by introduction version.
Dataset revision.
Last successful import.
Missing fields.
Duplicate records.
Conflicting values.
Broken images.
Missing numerical tables.
Unverified Version 7.1 records.
Import errors.
Test results.

Generate a report showing the actual imported totals for every category.

Do not label the dataset 100% complete unless every required category has been checked against an appropriate source and the documented validation rules pass.

PART 20 — ACCEPTANCE TESTS

Before considering the website complete, verify:

All available supported Version 7.1 records have been imported.
All category totals are calculated from actual database records.
Character, weapon, and artifact values match their sources.
Numeric tables do not silently replace missing values with zero.
Duplicate records are detected and handled.
Version metadata is consistent.
Character and weapon detail pages load real records.
Search and filters work across the imported data.
Build and farming calculators use actual numerical tables.
The map uses verified location data.
User progress is stored independently from game data.
Every route has useful content.
Mobile and desktop layouts work correctly.
Accessibility and loading states are tested.
Source attribution is visible.
The final import report distinguishes complete, partial, missing, and unverified categories.
FINAL EXECUTION INSTRUCTION

Build TEYVAT HUB as a complete, immersive, anime-style Genshin Impact platform with real structured data through Version 7.1.

Do not stop after producing a homepage, a database schema, or a few example cards.

Actually import, count, validate, and connect the available game data. Display exact numerical values only when supported by a verified record or documented formula.

Generate the working pages, functional tools, import scripts, database models, source attribution, and data-quality reports.

If a source, historical snapshot, backend, or asset is unavailable, document the limitation and implement the remaining functionality. Never fabricate data or claim that an incomplete import is complete.

The final result must be a real, expandable Genshin Impact companion website—not merely a beautiful mockup—with accurate data, a complete navigation system, functional game tools, and transparent coverage of every supported category through Version 7.1.
