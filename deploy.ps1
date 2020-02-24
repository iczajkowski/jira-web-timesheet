param (
    [Parameter(Mandatory=$true)][string]$version
)

git checkout -b release/v.$version
cd .\frontend\
Remove-Item .\build\ -Confirm:$false -Recurse -ErrorAction Ignore
npm run build
cd ..\backend\
Remove-Item .\dist\ -Confirm:$false -Recurse -ErrorAction Ignore
npm run build
git add .\dist\
git commit -m "Release v.$version" --no-verify
git push -u origin release/v.$version
eb deploy jira-timesheet-prod