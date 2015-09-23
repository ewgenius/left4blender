window.onload = function() {
  var m_app = b4w.require("app");
  var m_data = b4w.require("data");

  m_app.init({
    canvas_container_id: "canvas",
    callback: load_cb
  });

  function load_cb() {
    m_data.load("/scenes/test1.json", loaded_cb);
  }

  function loaded_cb() {
    m_app.enable_controls();
    m_app.enable_camera_controls();
  }
};
