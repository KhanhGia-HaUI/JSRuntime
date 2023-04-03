import os
import re
import json
from urllib.request import urlopen
import requests
import zipfile
from http.client import HTTPResponse

OWNER = "KhanhGia-HaUI"
REPO = "JSRuntime"
SHELL_KEYWORD = r"shell.zip"
SCRIPT_KEYWORD = r"script.zip"


# fetch GitHub API

def github_api_call(*fields) -> HTTPResponse:
    return urlopen(f"https://api.github.com/{'/'.join(fields)}")

# download file from github api


def download_file(url, filename) -> None:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(script_dir, filename)

    response = requests.get(url, stream=True)
    with open(filepath, "wb") as f:
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)

# default download function


def get_download(KEYWORD, *REPOS) -> None:
    has_keyword = re.compile(KEYWORD).search
    with github_api_call("repos", *REPOS) as response:
        assets = json.loads(response.read())["assets"]
        for asset in assets:
            if has_keyword(asset["name"]):
                download_file(asset["browser_download_url"], asset["name"])

# Uncompress zip


def uncompress_zip(zip_path: str, to_path: str) -> None:
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(to_path)

# Download from GitHub


def download_from_git() -> None:

    script_dir = os.path.dirname(os.path.abspath(__file__))

    try:

        # download shell
        get_download(SHELL_KEYWORD, OWNER, REPO, "releases", "tags", "shell")

        # download script
        get_download(SCRIPT_KEYWORD, OWNER, REPO, "releases", "tags", "script")

        # create script directory
        os.mkdir("script")

        # uncompress script
        uncompress_zip(os.path.join(script_dir, "script.zip"), "./script/")

        # remove script.zip
        os.remove(os.path.join(script_dir, "script.zip"))

        # uncompress shell
        uncompress_zip(os.path.join(script_dir, "shell.zip"), "./")

        # remove shell.zip
        os.remove(os.path.join(script_dir, "shell.zip"))

        # finish print

        print(
            f"\x1b[32m◉ Execution status: Script & Shell downloaded and uncompressed are success")

    except Exception as bug:
        # bug
        print(
            f"\u001b[31m◉ Execution error: Script & Shell downloaded and uncompressed are unsuccess, please try again. {bug}")


def main() -> None:
    print(f"\x1b[32m◉ Execution start: Download JSRuntime")
    print(f"\x1b[36m◉ Execution argument: Would you like to download?")
    print(f"\x1b[37m       0. No")
    print(f"\x1b[37m       1. Yes")
    print(f"\x1b[36m◉ ", end="")
    get_result: str = input()

    # if argument input is wrong
    while (True):
        # if true -> return
        if (int(get_result) == 1 or int(get_result) == 0):
            break
        print(
            f"\u001b[31m◉ Execution error: Reinput, not valid boolean argument")
        print(f"\x1b[36m◉ ", end="")
        get_result = input()

    match int(get_result):
        case 1:
            download_from_git()
        case 0:
            print(f"\x1b[32m◉ Execution status: Stopped download success")
        case _:
            print(f"\u001b[31m◉ Execution error: Argument data assert failed")

    print(f"\x1b[32m◉ Execution finish: Press enter to exit...")
    # all commands finished
    input()


if __name__ == "__main__":
    main()
