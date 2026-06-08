declare namespace PixSqueeze {
  export interface Options {
    strict?: boolean;
    checkOrientation?: boolean;
    retainExif?: boolean;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    width?: number;
    height?: number;
    resize?: 'contain' | 'cover' | 'none';
    quality?: number;
    mimeType?: string;
    convertTypes?: string | string[];
    convertSize?: number;
    beforeDraw?(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
    drew?(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
    success?(file: File | Blob): void;
    error?(error: Error): void;
  }
}

declare class PixSqueeze {
  constructor(file: File | Blob, options?: PixSqueeze.Options);
  abort(): void;
  static noConflict(): PixSqueeze;
  static setDefaults(options: PixSqueeze.Options): void;
}

declare module 'compressorjs' {
  export default PixSqueeze;
}
