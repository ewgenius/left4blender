declare module b4w {
  export function require(moduleId: String, namespace: String): Module

  export function register(moduleId: String, namespace: String): any

  export interface Module {

  }

  export class Controls implements Module {
    
  }
}
