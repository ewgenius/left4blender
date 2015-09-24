declare module b4w {
  export function require(moduleId: String, namespace?: String): Module;

  export function register(moduleId: String, module: Module): any;

  export function get_namespace (namespace): any;

  export function module_check (moduleId): any;

  export interface App {
    init(params: any): void;
    enable_controls(): void;
    enable_camera_controls(): void;
  }

  export interface Module {
  }

  export class Controls implements Module {

  }

  export class Data implements Module {
    load(path: String, callback: () => void);
  }
}
