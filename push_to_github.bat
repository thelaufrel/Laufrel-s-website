@echo off
echo ========================================
echo  Pushing Laufrel to GitHub
echo ========================================
echo.
echo Repository: https://github.com/SriramPandian/Laufrel.git
echo.
echo You will be prompted for credentials:
echo   Username: SriramPandian
echo   Password: [Your Personal Access Token]
echo.
echo Don't have a token? Get one here:
echo https://github.com/settings/tokens
echo   - Click "Generate new token (classic)"
echo   - Check the "repo" scope
echo   - Copy the token
echo.
pause
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo  SUCCESS! Your code is on GitHub!
    echo ========================================
    echo.
    echo View your repository at:
    echo https://github.com/SriramPandian/Laufrel
) else (
    echo ========================================
    echo  Push failed. Please check:
    echo ========================================
    echo  1. You entered the correct username: SriramPandian
    echo  2. You used a Personal Access Token (not password)
    echo  3. The token has 'repo' permissions
    echo.
    echo Get a token: https://github.com/settings/tokens
)
echo.
pause
