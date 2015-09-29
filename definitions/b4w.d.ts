declare module b4w {
  export function require(moduleId: String, namespace?: String): Module;

  export function register(moduleId: String, module: Module): any;

  export function get_namespace(namespace): any;

  export function module_check(moduleId): any;

  export interface App {
    init(params: any): void;
    enable_controls(): void;
    enable_camera_controls(): void;
  }

  export interface Sensor {

  }

  export interface Module {
  }

  export class Controls implements Module {
    CT_CHANGE: Number;
    CT_CONTINUOUS: Number;
    CT_LEVEL: Number;
    CT_SHOT: Number;
    CT_TRIGGER: Number;
    KEY_1: Number;
    KEY_2: Number;
    KEY_3: Number;
    KEY_4: Number;
    KEY_5: Number;
    KEY_6: Number;
    KEY_7: Number;
    KEY_8: Number;
    KEY_9: Number;
    KEY_A: Number;
    KEY_ALT: Number;
    KEY_B: Number;
    KEY_BACKSPAC: Number;
    KEY_BACK_SLASH: Number;
    KEY_C: Number;
    KEY_CAPSLOCK: Number;
    KEY_COMMA: Number;
    KEY_CTRL: Number;
    KEY_D: Number;
    KEY_DASH: Number;
    KEY_DEC_POINT: Number;
    KEY_DOWN: Number;
    KEY_E: Number;
    KEY_ENTER: Number;
    KEY_EQUAL_SIGN: Number;
    KEY_ESC: Number;
    KEY_F: Number;
    KEY_FORWARD_SLASH: Number;
    KEY_G: Number;
    KEY_GRAVE_ACCENT: Number;
    KEY_H: Number;
    KEY_I: Number;
    KEY_J: Number;
    KEY_K: Number;
    KEY_L: Number;
    KEY_LEFT: Number;
    KEY_LEFT_SQ_BRACKET: Number;
    KEY_M: Number;
    KEY_N: Number;
    KEY_NUM0: Number;
    KEY_NUM1: Number;
    KEY_NUM2: Number;
    KEY_NUM3: Number;
    KEY_NUM4: Number;
    KEY_NUM5: Number;
    KEY_NUM6: Number;
    KEY_NUM7: Number;
    KEY_NUM8: Number;
    KEY_NUM9: Number;
    KEY_O: Number;
    KEY_P: Number;
    KEY_PAUSE: Number;
    KEY_PERIOD: Number;
    KEY_Q: Number;
    KEY_R: Number;
    KEY_RIGHT: Number;
    KEY_RIGHT_SQ_BRACKET: Number;
    KEY_S: Number;
    KEY_SEMI_COLON: Number;
    KEY_SHIFT: Number;
    KEY_SINGLE_QUOTE: Number;
    KEY_SPACE: Number;
    KEY_T: Number;
    KEY_TA: Number;
    KEY_U: Number;
    KEY_UP: Number;
    KEY_V: Number;
    KEY_W: Number;
    KEY_X: Number;
    KEY_Y: Number;
    KEY_Z: Number;
    PL_MULTITOUCH_MOVE_PA: Number;
    PL_MULTITOUCH_MOVE_ZOO: Number;
    PL_SINGLE_TOUCH_MOV: Number;

    check_sensor_manifold(obj, id): Boolean;
    check_sensor_manifolds(obj): Boolean;
    create_collision_impulse_sensor(obj): b4w.Sensor;
    create_collision_sensor(obj_src, collision_id?, calc_pos_norm?): b4w.Sensor;
    create_custom_sensor(value): b4w.Sensor;
    create_elapsed_sensor(): b4w.Sensor;
    create_gyroscope_angles_sensor(): b4w.Sensor;
    create_gyroscope_angles_sensor(): b4w.Sensor;
    create_kb_sensor_manifold(obj, id, type, key, callback, callback_param?);
    create_keyboard_sensor(key): b4w.Sensor;
    create_motion_sensor(obj, threshold?, rotation_threshold?): b4w.Sensor;
    create_mouse_click_sensor(): b4w.Sensor;
    create_mouse_move_sensor(axis?): b4w.Sensor;
    create_mouse_wheel_sensor(): b4w.Sensor;
    create_ray_sensor(obj_src, from, to, collision_id?, is_binary_value?, calc_pos_norm?, ign_src_rot?): b4w.Sensor;
    create_selection_sensor(obj, auto_release?): b4w.Sensor;
    create_sensor_manifold(obj, id, type, sensors, logic_fun, callback, callback_param?);
    create_timeline_sensor(): b4w.Sensor;
    create_timer_sensor(period, do_repeat?): b4w.Sensor;
    create_touch_move_sensor(axis?): b4w.Sensor;
    create_touch_zoom_sensor(): b4w.Sensor;
    create_vertical_velocity_sensor(obj, threshold?): b4w.Sensor;
    get_custom_sensor(sensor): Number;
    get_sensor_payload(obj, manifold_id, num): any;
    get_sensor_value(obj, manifold_id, num): Number;
    register_device_orientation(): void;
    register_keyboard_events(element, prevent_default): void;
    register_mouse_events(element, prevent_default, allow_element_exit?): void;
    register_touch_events(element, prevent_default): void;
    register_wheel_events(element, prevent_default): void;
    remove_sensor_manifold(obj, id?): void;
    remove_sensor_manifolds(obj): void;
    reset(): void;
    reset_timer_sensor(obj, manifold_id, num, period): void;
    set_custom_sensor(sensor, value): void;
    unregister_device_orientation(): void;
    unregister_keyboard_events(element): void;
    unregister_mouse_events(element): void;
    unregister_touch_events(element): void;
    unregister_wheel_events(element): void;
  }

  export class Scenes implements Module {
    append_object(a, b): void;
    apply_glow_anim(b, c, d, e): void;
    apply_glow_anim_def(b): void;
    apply_outline_anim(a, b, c, d): void;
    apply_outline_anim_def(a): void;
    check_object(a): void;
    check_object_by_dupli_name(a, b, c): void;
    check_object_by_dupli_name_list(a, b): void;
    check_object_by_name(a, b): void;
    clear_glow_anim(b): void;
    clear_outline_anim(a): void;
    get_active(): void;
    get_active_camera(): void;
    get_all_objects(a, b): void;
    get_bloom_params(): void;
    get_cam_water_depth(): void;
    get_color_correction_params(): void;
    get_dof_params(): void;
    get_environment_colors(): void;
    get_first_character(): void;
    get_fog_color_density(a): void;
    get_glow_color(b): void;
    get_glow_intensity(b): void;
    get_glow_material_params(): void;
    get_god_rays_params(): void;
    get_mb_params(): void;
    get_meta_tags(): void;
    get_object_by_dupli_name(a, b, c): void;
    get_object_by_dupli_name_list(a, b): void;
    get_object_by_name(a, b): void;
    get_object_children(a): void;
    get_object_data_id(a): void;
    get_object_dg_parent(a): void;
    get_object_name(a): void;
    get_object_type(a): void;
    get_outline_color(a): void;
    get_outline_intensity(a): void;
    get_scenes(): void;
    get_shadow_params(): void;
    get_shore_dist(a, b): void;
    get_sky_params(): void;
    get_ssao_params(): void;
    get_type_mesh_object(a): void;
    get_water_mat_params(a): void;
    get_water_surface_levelua(a, b): void;
    get_wind_params(): void;
    hide_object(a): void;
    is_hidden(a): void;
    is_visible(a): void;
    marker_frame(a): void;
    outlining_is_enabled(a): void;
    pick_object(b, c): void;
    remove_object(a): void;
    set_active(a): void;
    set_bloom_params(a): void;
    set_color_correction_params(a): void;
    set_dof_params(a): void;
    set_environment_colors(a, b, c): void;
    set_fog_color_density(a): void;
    set_glow_color(b): void;
    set_glow_intensity(b, c): void;
    set_glow_material_params(a): void;
    set_god_rays_params(a): void;
    set_mb_params(a): void;
    set_outline_color(a): void;
    set_outline_intensity(a, b): void;
    set_shadow_params(a): void;
    set_sky_params(a): void;
    set_ssao_params(a): void;
    set_water_params(a): void;
    set_wind_params(a): void;
    show_object(a): void;
    update_scene_materials_params(): void;
  }

  export class Data implements Module {
    load(path: String, callback: () => void);
  }
}
