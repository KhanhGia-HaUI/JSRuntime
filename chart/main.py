import numpy as np
import matplotlib.pyplot as plt
import json
import os as FileSystem
import tkinter as tk
from tkinter import filedialog
import sys


def draw_graph(
        x_start: float = 0,
        y_start: float = 0,
        color: str = "black",
        linestyle: str = "solid",
        alpha: float = 1,
) -> None:
    # Ox
    plt.axhline(x_start, color=color, linestyle=linestyle, alpha=alpha)

    # Oy
    plt.axvline(y_start, color=color, linestyle=linestyle, alpha=alpha)


def write_file(
        file_path: str,
        save_data: str,
) -> None:
    try:
        with open(file_path, "w") as file:
            file.write(save_data)
    except Exception as bug:
        raise RuntimeError(
            f"Cannot write file to {FileSystem.path(file_path)} {bug}")


def read_file(
        file_path: str,
) -> str:
    try:
        with open(file_path, "r") as file:
            data = file.read()
            return data
    except Exception as bug:
        raise RuntimeError(
            f"Cannot read file {FileSystem.chdir(file_path)} {bug}")


def read_json(
        file_path: str,
) -> object:
    return json.loads(read_file(file_path))


def write_json(
        file_path: str,
        data: object,
        indent: str | int = '\t'
) -> None:
    try:
        write_file(file_path, json.dumps(data, indent=indent))
    except Exception as bug:
        raise Exception(f"Cannot parse {file_path}, code: {bug}")


def draw_chart(
        x: any,
        y: any,
        label: str,
        linestyle: str = "solid",
) -> None:
    if not (linestyle):
        linestyle = "solid"
    plt.plot(x, y, label=label, linestyle=linestyle)


def process_json_compute(
        json_data: object,
) -> None:
    if not "lines" in json_data:
        raise RuntimeError(f"No property \"lines\" in json")
    if not "functions" in json_data:
        raise RuntimeError(f"No property \"functions\" in json")
    if not "start" in json_data["lines"]:
        raise RuntimeError(f"No property \"start\" in json.lines")
    if not "end" in json_data["lines"]:
        raise RuntimeError(f"No property \"end\" in json.lines")
    if not "num" in json_data["lines"]:
        raise RuntimeError(f"No property \"num\" in json.lines")


def chart_display(
        label: str,
) -> None:
    plt.xlabel(f'x')
    plt.ylabel(f'y = f(x)')
    plt.title(f'{label}')
    plt.legend()
    plt.show()


def open_windows_explorer(
) -> str:
    root = tk.Tk()
    root.withdraw()

    # Open the File Dialog
    return filedialog.askopenfilename(title="Select a JSON file", filetypes=[("JSON files", "*.json")])


def do_compute(
        file_path: str,
) -> None:
    json_data = (read_json(file_path))

    # Xử lý json trước khi bắt đầu làm
    process_json_compute(json_data)
    # Khởi tạo miền Ox
    x = np.linspace(json_data['lines']['start'],
                    json_data["lines"]["end"], json_data["lines"]["num"])
    # Vẽ trục tọa độ Oxy
    draw_graph()
    # Vẽ thử hàm np
    for function in json_data["functions"]:
        draw_chart(x, eval(f"np.{function['func']}"),
                   function['label'], function['line'])

    # Draw chart
    chart_display(json_data.get("display"))


def main(
) -> None:

    if len(sys.argv) > 1:

         # drag & drop
        for argument in sys.argv[1:]:
            do_compute(str(argument))
    else:
        # Windows Explorer Open
        file_path = open_windows_explorer()
        do_compute(file_path)


if __name__ == "__main__":
    main()
