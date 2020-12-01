export declare namespace DTR {
  interface Document {
    panels: Panel[];
  }
  interface EditDoc {
    version?: string;
    document: Document;
    fontRepositoryUrl?: string;
    metadata?: EditDocMetadata;
  }
  interface EditDocMetadata {
    designTemplateMetadata?: TemplateMetadata;
  }
  interface IntendedBehavior {
    swappable: boolean;
  }
  interface TemplateElementMetadata {
    readonly id: string;
    readonly elementType?: 'textField' | 'wordart' | 'placeholderImage' | 'templateImage';
    readonly templateTextType?: string;
    readonly templateText?: string;
    readonly label?: string;
    readonly purposeName?: string;
    readonly availableFinishes?: string[];
    readonly intendedBehavior?: IntendedBehavior;
  }

  interface TemplateMetadata {
    readonly idtifVersion?: string;
    readonly elements?: TemplateElementMetadata[];
  }
  interface ItemRefData {
    content?: string;
  }
  interface Image {
    id: string;
    previewUrl?: string;
    printUrl?: string;
    cropFractions?: Inset;
    zIndex?: number; // int32
    rotationAngle?: number; // double
    horizontalAlignment?: string;
    verticalAlignment?: string;
    position: Position;
    imageType?: string;
  }
  interface Inset {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }
  interface ItemRef {
    id: string;
    type?: string;
    url?: string;
    data?: ItemRefData;
    zIndex?: number; // int32
    rotationAngle?: number; // double
    position?: Position;
  }
  interface Point {
    x?: string;
    y?: string;
  }
  interface Stroke {
    color?: string;
    overprints?: string[];
    thickness?: string;
    lineCap?: string;
    lineJoin?: string;
    dashPattern?: DashPattern;
  }
  interface DashPattern {
    segments?: DashSegment[];
  }
  interface DashSegment {
    length?: string;
  }
  interface Shape {
    type?: string;
    stroke?: Stroke;
    zIndex?: number; // int32
    position?: Position;
    rotationAngle?: number;
    id?: string;
    windingType?: 0 | 1; // int32
    start?: Point;
    end?: Point;
    color?: string;
    overprints?: string[];
    cornerRadius?: string;
    curves?: Curve[];
    viewBox?: Position;
  }
  interface Curve {
    operation?: string;
    position?: Point;
    controlPoint1?: Point;
    controlPoint2?: Point;
  }
  interface Panel {
    id: string;
    name?: string;
    width: string;
    height: string;
    images?: Image[];
    textAreas: TextArea[];
    itemReferences: ItemRef[];
    shapes: Shape[];
    decorationTechnology?: 'offsetOrDigital';
  }
  interface Position {
    x?: string;
    y?: string;
    width?: string;
    height?: string;
  }
  interface RenderDoc {
    version?: string;
    document?: Document;
    fontRepositoryUrl?: string;
  }
  interface TextArea {
    id?: string;
    blockFlowDirection?: string;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    textFields: TextField[];
    zIndex?: number; // int32
    rotationAngle?: number; // double
    position: Position;
  }
  interface TextField {
    id?: string;
    fontFamily?: string;
    fontStyle?: string;
    fontSize?: string;
    content?: string;
    color?: string;
  }
}
