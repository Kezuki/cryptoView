export default class ApiService {
  _apiBase = "https://api.coincap.io/v2/assets";

  _apiPeriod = {
    m1: "1D",
    m5: "5D",
    m15: "1W",
    m30: "2W",
    h1: "1M",
    h2: "2M",
    d1: "2Y",
  };

  getResource = async () => {
    const res = await fetch(`${this._apiBase}`);
    return await res.json();
  };

  getHistory = async (id, interval) => {
    const res = await fetch(
      `${this._apiBase}/${id}/history?interval=${interval}`
    );
    return await res.json();
  };
}
