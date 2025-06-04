import pytest
import pandas as pd
from unittest.mock import MagicMock
from utils.google_utils import (
    init_gsheet,
    save_compare_results_to_gsheet,
    save_slider_results_to_gsheet,
    save_feedback_to_gsheet,
    lade_worksheet_namen,
    lade_worksheet,
)


@pytest.fixture
def mock_credentials(mocker):
    """Patch streamlit.secrets with dummy credentials."""
    mock_secrets = {"gcp_service_account": {"type": "service_account"}}
    mocker.patch("utils.google_utils.st.secrets", mock_secrets)
    mocker.patch(
        "utils.google_utils.Credentials.from_service_account_info",
        return_value="dummy_creds",
    )
    return mocker


def test_init_gsheet(mock_credentials, mocker):
    sheet_name = "TestSheet"
    sheet_mock = MagicMock()
    client_mock = MagicMock()
    client_mock.open.return_value = sheet_mock
    mocker.patch("utils.google_utils.gspread.authorize", return_value=client_mock)

    sheet = init_gsheet(sheet_name)
    assert sheet == sheet_mock


def test_save_compare_results_to_gsheet(mock_credentials, mocker):
    df = pd.DataFrame({"label": ["A", "B"], "sekunden_seit_start": [10, 20]})
    sheet_mock = MagicMock()
    ws_mock = MagicMock()
    ws_mock.get_all_records.return_value = [
        {"timestamp": "", "spielname": "", "alter": "", "A": "", "B": "", "punkte": ""}
    ]
    sheet_mock.worksheet.return_value = ws_mock
    client_mock = MagicMock()
    client_mock.open.return_value = sheet_mock
    mocker.patch("utils.google_utils.gspread.authorize", return_value=client_mock)

    save_compare_results_to_gsheet(
        df,
        scene="Dorf",
        spielname="Testspiel",
        alter=12,
        all_pts=[{"rel_x": 0.1, "rel_y": 0.2, "hit": True}],
    )

    ws_mock.append_row.assert_called()


def test_save_slider_results_to_gsheet(mock_credentials, mocker):
    sheet_mock = MagicMock()
    ws_mock = MagicMock()
    ws_mock.get_all_values.return_value = [
        ["timestamp", "scene", "slider1", "slider2", "slider3", "slider4"]
    ]
    sheet_mock.worksheet.return_value = ws_mock
    client_mock = MagicMock()
    client_mock.open.return_value = sheet_mock
    mocker.patch("utils.google_utils.gspread.authorize", return_value=client_mock)

    save_slider_results_to_gsheet("Dorf", [1, 2, 3, 4])
    ws_mock.append_row.assert_called()


def test_save_feedback_to_gsheet(mock_credentials, mocker):
    df = pd.DataFrame({"Feedback": ["Great Game!"]})
    sheet_mock = MagicMock()
    ws_mock = MagicMock()
    ws_mock.get_all_values.return_value = [["Feedback"]]
    sheet_mock.worksheet.return_value = ws_mock
    client_mock = MagicMock()
    client_mock.open.return_value = sheet_mock
    mocker.patch("utils.google_utils.gspread.authorize", return_value=client_mock)

    save_feedback_to_gsheet(df)
    ws_mock.insert_rows.assert_called()


def test_lade_worksheet_namen(mock_credentials, mocker):
    sheet_mock = MagicMock()
    sheet_mock.worksheets.return_value = [
        MagicMock(title="Sheet1"),
        MagicMock(title="Sheet2"),
    ]
    client_mock = MagicMock()
    client_mock.open.return_value = sheet_mock
    mocker.patch("utils.google_utils.gspread.authorize", return_value=client_mock)

    names = lade_worksheet_namen("TestSheet")
    assert "Sheet1" in names and "Sheet2" in names


def test_lade_worksheet(mock_credentials, mocker):
    sheet_mock = MagicMock()
    ws_mock = MagicMock()
    ws_mock.get_all_records.return_value = [{"A": 1, "B": 2}]
    sheet_mock.worksheet.return_value = ws_mock
    client_mock = MagicMock()
    client_mock.open.return_value = sheet_mock
    mocker.patch("utils.google_utils.gspread.authorize", return_value=client_mock)

    df = lade_worksheet("TestSheet", "Sheet1")
    assert isinstance(df, pd.DataFrame)
    assert "A" in df.columns
    assert "B" in df.columns
