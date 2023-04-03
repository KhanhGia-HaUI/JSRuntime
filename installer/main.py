import os as FileSystem
import re
import json
from urllib.request import urlopen
import requests
import zipfile
from http.client import HTTPResponse

OWNER: str = "KhanhGia-HaUI"
REPO: str = "JSRuntime"
SHELL_KEYWORD: str = r"shell.zip"
SCRIPT_KEYWORD: str = r"script.zip"


# fetch GitHub API

def github_api_call(*fields) -> HTTPResponse:
    return urlopen(f"https://api.github.com/{'/'.join(fields)}")

# download file from github api


def download_file(url: str, filename: str) -> None:
    script_dir: str = FileSystem.path.dirname(
        FileSystem.path.abspath(__file__))
    filepath: str = FileSystem.path.join(script_dir, filename)

    response: str = requests.get(url, stream=True)
    with open(filepath, "wb") as f:
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)

# default download function


def get_download(KEYWORD: str, *REPOS: list[str]) -> None:
    has_keyword: str = re.compile(KEYWORD).search
    with github_api_call("repos", *REPOS) as response:
        assets: str = json.loads(response.read())["assets"]
        for asset in assets:
            if has_keyword(asset["name"]):
                download_file(asset["browser_download_url"], asset["name"])

# Uncompress zip


def uncompress_zip(zip_path: str, to_path: str) -> None:
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(to_path)

# Download from GitHub


def download_from_git() -> None:

    script_dir = FileSystem.path.dirname(FileSystem.path.abspath(__file__))

    try:

        # download shell
        get_download(SHELL_KEYWORD, OWNER, REPO, "releases", "tags", "shell")

        # download script
        get_download(SCRIPT_KEYWORD, OWNER, REPO, "releases", "tags", "script")

        # create script directory
        FileSystem.mkdir("script")

        # uncompress script
        uncompress_zip(FileSystem.path.join(
            script_dir, "script.zip"), "./script/")

        # remove script.zip
        FileSystem.remove(FileSystem.path.join(script_dir, "script.zip"))

        # uncompress shell
        uncompress_zip(FileSystem.path.join(script_dir, "shell.zip"), "./")

        # remove shell.zip
        FileSystem.remove(FileSystem.path.join(script_dir, "shell.zip"))

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

    # Add a utf8 char to beautify the input
    print(f"\x1b[36m◉ ", end="")
    get_result: str = input()

    # Input check

    while (True):

        # if true -> return
        if (int(get_result) == 1 or int(get_result) == 0):
            break

        # Perhaps not 0 or 1

        # Force the user to reinput

        print(
            f"\u001b[31m◉ Execution error: Reinput, not valid boolean argument")

        print(f"\x1b[36m◉ ", end="")

        get_result = input()

    # check input

    match int(get_result):

        case 1:
            # download

            download_from_git()

        case 0:
            # no download

            print(f"\x1b[32m◉ Execution status: Stopped download success")

        case _:
            # Perhaps never have this case but just in case
            print(
                f"\u001b[31m◉ Execution error: No default input value founded")

    # all commands finished

    print(f"\x1b[32m◉ Execution finish: Press enter to exit...")

    # Press enter to exit & stop console

    input()


if __name__ == "__main__":
    main()
