#include <iostream>
#include <windows.h>
#include <string>

#define constexp WindowsExplorerVersion 0;

namespace JSRuntime {

    class AddRegistry {
    public:

        inline auto static AddKeyToRegistry(
            HKEY hRootKey, 
            LPCWSTR subKey, 
            LPCWSTR valueName, 
            DWORD valueType, 
            const BYTE* valueData, 
            DWORD valueDataSize) -> LONG
        {
            HKEY hKey;
            LONG result;

            result = RegCreateKeyExW(
                hRootKey,
                subKey,
                0,
                NULL,
                REG_OPTION_NON_VOLATILE,
                KEY_WRITE,
                NULL,
                &hKey,
                NULL);

            if (result != ERROR_SUCCESS)
            {
                std::wcerr << L"Error creating/opening registry key: " << result << std::endl;
                return result;
            }
            result = RegSetValueExW(
                hKey,
                valueName,
                0,
                valueType,
                valueData,
                valueDataSize);

            if (result != ERROR_SUCCESS)
            {
                std::wcerr << L"Error setting registry value: " << result << std::endl;
            }
            RegCloseKey(hKey);
            return result;
        }
    };

    
}