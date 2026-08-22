# Frontend Roadmap Archive

> [!WARNING]
> **Archived learning material — do not deploy or treat these examples as maintained applications.**

## Purpose

This repository is a collection of frontend exercises, course files, starter projects, and completed examples gathered during an earlier JavaScript learning phase. It is retained to recall the topics studied, not to demonstrate a current production frontend stack.

## Contents

The repository includes HTML, CSS, JavaScript, Bootstrap, and course-based application exercises. Some folders contain both `starter` and `final` snapshots copied from training material; those files should be understood as historical references rather than original maintained products.

## Current status

- Educational archive
- Not deployed
- Not part of the owner's current backend-focused technology stack
- No dependency maintenance, support, or security updates are planned
- Should remain unpinned and should not be presented as production-ready work

## Dependency and security notice

A 2026 security review found numerous high-severity npm advisories in old Parcel-based course lockfiles, including issues in `js-yaml`, `brace-expansion`, `svgo`, `immutable`, `postcss`, `sharp`, `lodash`, and `node-forge`.

The affected package manifests and generated lockfiles have been removed from the copied course snapshots under:

- `javascript/`
- `javascript/complete-javascript-course-master/17-Modern-JS-Modules-Tooling/{starter,final}`
- `javascript/complete-javascript-course-master/18-forkify/{starter,final}`

Those folders are now source-only references. Do not restore their historical dependency files or run package installation against them. If an exercise is worth revisiting, create a new project with a supported runtime and current dependencies, then migrate only the application source that is still useful.

## Recommended use

Use this repository only to recall concepts and examples. For portfolio or interview purposes, prefer maintained repositories that demonstrate current architecture, testing, security, and CI practices.
