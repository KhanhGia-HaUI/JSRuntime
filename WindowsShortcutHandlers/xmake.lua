set_project('WindowsExplorerExtension')

add_rules('mode.debug', 'mode.release')

apply_common_setting()

add_requires('vcpkg::wil')