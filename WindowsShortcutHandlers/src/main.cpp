
#include "./util.cpp"

int main()
{
    const wchar_t* subKey = L"Software\\Classes\\*\\shell\\JSRuntime";
    const wchar_t* valueName = L"";
    const wchar_t* displayName = L"Open with JSRuntime";
    LONG result = JSRuntime::AddRegistry::AddKeyToRegistry(HKEY_CURRENT_USER, 
        subKey, 
        valueName, 
        REG_SZ, (const BYTE*)displayName, 
        (wcslen(displayName) + 1) * sizeof(wchar_t));

    if (result == ERROR_SUCCESS)
    {
        std::wcout << L"Successfully added context menu item." << std::endl;
    }
    else
    {
        std::wcout << L"Failed to add context menu item." << std::endl;
        return 1;
    }

    const wchar_t* commandSubKey = L"Software\\Classes\\*\\shell\\JSRuntime\\command";

    std::wstring commandValue = L"{filepath} \"%1\"";

    result = JSRuntime::AddRegistry::AddKeyToRegistry(HKEY_CURRENT_USER, commandSubKey, valueName, REG_SZ, (const BYTE*)commandValue.c_str(), (commandValue.length() + 1) * sizeof(wchar_t));

    if (result == ERROR_SUCCESS)
    {
        std::wcout << L"Successfully added command for context menu item." << std::endl;
    }
    else
    {
        std::wcout << L"Failed to add command for context menu item." << std::endl;
    }

    return 0;
}
