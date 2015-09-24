window.onload = function() {
  var m_app = b4w.require("app");
  var m_data = b4w.require("data");
  var m_controls = b4w.require("controls");
  var version = b4w.require("version");

  console.log('m_app', m_app);
  console.log('m_data', m_data);
  console.log('m_controls', m_controls);


  m_app.init({
    canvas_container_id: "container",
    callback: load_cb
  });

  function load_cb() {
    m_data.load("/scenes/test2.json", loaded_cb);
  }

  function loaded_cb() {
    m_app.enable_controls();
    m_app.enable_camera_controls();
  }
};
