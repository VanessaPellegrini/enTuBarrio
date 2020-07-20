export interface Order {
    id?: number;
    cant_items?: number;
    estado_pedido?: string;
    fecha?: Date;
    nombre_cliente?: string;
    telefono_cliente?: string;
    total?: number;
    aceptacion?:string;
    key:string;
    activo?:boolean;
  }