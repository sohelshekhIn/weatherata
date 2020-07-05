window.addEventListener("load", () => {
  let e,
    t,
    o = document.getElementById("ozo"),
    n = document.getElementById("humid"),
    i = document.getElementById("visib"),
    s = document.getElementById("pressu"),
    c = document.getElementById("sum_txt"),
    l = document.getElementById("precipPro"),
    r = document.getElementById("timezone-v"),
    a = document.getElementById("precip_type"),
    m = document.getElementById("precipInten"),
    d = document.getElementById("temperature-deg"),
    u = document.getElementById("city-v"),
    p = document.getElementById("region-v");
  function g() {
    navigator.permissions.query({ name: "geolocation" }).then(function (e) {
      "granted" == e.state
        ? (console.log(e.state),
          NotiflixBlock(".blocking", "Getting weather data..."),
          y())
        : "prompt" == e.state
        ? NotiflixWarning(
            "Allow location permission",
            "Please allow loaction permission for proper working of app",
            "Allow GPS",
            "true",
            void setTimeout(function () {
              y(), g();
            }, 1e3)
          )
        : "denied" == e.state &&
          (NotiflixFailure(
            "weatherata won't work perfectly!",
            "It seems you have blocked location permission or GPS is not enabled. Please allow location permission from settings",
            "Allow",
            "true"
          ),
          NotiflixNotifyFailure(
            "Please enable locatio permmission from settings"
          ),
          console.log("GPS permission denied!"),
          y(),
          "" == t ? console.log("GPS permission granted") : y()),
        (e.onchange = function () {
          location.reload(!1);
        });
    });
  }
  function y() {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition((g) => {
        (t = g.coords.latitude), (e = g.coords.longitude);
        const y = "https://geocode.xyz/" + t + "," + e + "?json=1";
        fetch(
          "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f1cecbf0866c7956c8b13c0f2b8caa17/" +
            t +
            "," +
            e
        )
          .then((e) => e.json())
          .then((e) => {
            const { timezone: t } = e,
              {
                temperature: u,
                icon: p,
                summary: g,
                ozone: y,
                visibility: f,
                pressure: h,
                humidity: x,
                precipType: w,
                precipProbability: I,
                precipIntensity: B,
              } = e.currently;
            NotiflixRBlock(".blocking", "1900"),
              (document.getElementsByClassName("blocking").style = "none"),
              (r.textContent = t),
              (c.textContent = g),
              (i.textContent = f),
              (o.textContent = y),
              (s.textContent = h),
              (n.textContent = x),
              (m.textContent = B),
              (a.textContent = w),
              (l.textContent = I),
              (function (e, t) {
                const o = new Skycons({ color: "white" }),
                  n = e.replace(/-/g, "_").toUpperCase();
                o.play(), o.set(t, Skycons[n]);
              })(p, document.querySelector(".icon")),
              (celsius = (5 * (u - 32)) / 9),
              (celsius = Math.round(celsius)),
              (d.textContent = celsius);
          }),
          fetch(y)
            .then((e) => e.json())
            .then((e) => {
              const { city: t, region: o } = e;
              (u.textContent = t), (p.textContent = o);
            });
      });
    let g = 0;
    setInterval(function () {
      (g += 1e3), (sessionStorage.ViewingTime = g);
    }, 1e3);
  }
  g();
});
