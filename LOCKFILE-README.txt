# Lockfile note

The uploaded pnpm lockfile is intentionally preserved from the supplied project.
Its importer dependency graph does not contain the old GiGi brand identity;
therefore no branding rewrite is necessary.

After replacing package.json, run `pnpm install` once in the project root if
you want pnpm to refresh the lockfile metadata locally.
