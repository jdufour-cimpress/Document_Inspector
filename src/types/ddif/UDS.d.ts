type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export declare namespace UDS {
  interface CimdocPdfBox {
    position?: Position;
    type?: string;
  }
  interface CimpressDocument {
    version: string;
    owner?: string;
    tenant?: string;
    document: DesignDocument;
    sku?: string;
    skuVariables?: {
      [name: string]: string;
    };
    metadata?: {};
    projectionId?: string;
    fontRepositoryUrl?: string;
  }
  interface Clip {
    startZIndex?: number; // int32
    endZIndex?: number; // int32
    position?: Position;
  }
  interface ColorAdjustment {
    hueMultiplier?: number; // double
    hueOffset?: number; // double
    saturationMultiplier?: number; // double
    saturationOffset?: number; // double
    lightnessMultiplier?: number; // double
    lightnessOffset?: number; // double
  }
  interface ColorOverride {
    ordinal?: number; // int32
    color?: string;
  }
  interface ColorizationHandler {
    operationType?: string;
    exclude?: string[];
    includeOnly?: string[];
  }
  interface CropFractions {
    bottom?: string;
    top?: string;
    left?: string;
    right?: string;
  }
  interface Curve {
    operation?: string;
    position?: Point;
    controlPoint1?: Point;
    controlPoint2?: Point;
  }
  interface DashPattern {
    segments?: DashSegment[];
  }
  interface DashSegment {
    length?: string;
  }
  interface DesignDocumentWithSurfaces {
    surfaces: DesignSurface[];
  }

  interface DesignDocumentWithPanels {
    panels: DesignSurface[];
  }

  type DesignDocument = XOR<DesignDocumentWithSurfaces, DesignDocumentWithPanels>;

  interface DesignSurface {
    id: string;
    name?: string;
    width: string;
    height: string;
    images?: Image[];
    simpleTextFields?: SimpleTextField[];
    textAreas?: TextArea[];
    itemReferences?: ItemReference[];
    comparisonImages?: ImageVariation[];
    shapes?: Shape[];
    pdfPlaceholders?: PdfPlaceholder[];
    ornaments?: Ornament[];
    colorizationHandlers?: ColorizationHandler[];
    spotColorGenerators?: SpotColorGenerator[];
    pdfBoxes?: CimdocPdfBox[];
    clips?: Clip[];
    decorationTechnology?: string;
    colorMode?: string;
    substrateMatchingThreadColor?: string;
  }
  /**
   * An instruction-source agnostic representation of a document.
   */
  interface DocumentReference {
    /**
     * The cimdoc used to create the document reference (UDS ONLY).
     */
    cimDocUrl?: string;
    /**
     * The prepress instructions for this document mapped to surface groups for multi-deco and multi-technology documents.
     */
    prepressInstructions?: {
      [name: string]: string;
    };
    /**
     * The prepress instructions for this document used to generate PDF or StitchDoc output.
     */
    prepressInstructionsUrl?: string;
    /**
     * The rendering instructions for this document used to generate raster previews.
     */
    renderingInstructionsUrl?: string;
  }
  interface Glyph {
    index?: number; // int32
    width?: string;
    xOffset?: string;
    yOffset?: string;
  }
  interface GlyphRun {
    fontSize?: string;
    fontStyle?: string;
    fontFamily?: string;
    fontVersion?: number; // int32
    color?: string;
    overprints?: string[];
    stroke?: Stroke;
    baseline?: string;
    rotationAngle?: number; // double
    glyphs?: Glyph[];
  }
  interface Item {
    id?: string;
    key?: string;
  }
  interface Image extends Item {
    url?: string;
    printUrl?: string;
    previewUrl?: string;
    originalSourceUrl?: string;
    zIndex?: number; // int32
    position: Position;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    overlays?: Overlay[];
    comparisonImages?: ImageVariation[];
    cropFractions?: CropFractions;
    pageNumber?: number; // int32
    mirrorDirection?: 0 | 1; // int32
    rotationAngle?: number;
    vpThreadMapping?: string;
    colorAdjustment?: ColorAdjustment;
    colorOverrides?: ColorOverride[];
    specialProcessing?: string[];
  }
  interface ImageVariation extends Item {
    url?: string;
  }
  interface ItemReference extends Item {
    type?: string;
    url?: string;
    specName?: string;
    data?: {};
    zIndex?: number; // int32
    position?: Position;
    rotationAngle?: number;
    fontRepositoryUri?: string;
  }
  interface Ornament {
    type?: string;
    positions?: Point[];
  }
  interface Overlay {
    color?: string;
    printUrl?: string;
    previewUrl?: string;
    originalSourceUrl?: string;
    pageNumber?: number; // int32
  }
  interface PdfPlaceholder {
    name?: string;
    position?: Point;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    pageNumber?: number; // int32
    zIndex?: number; // int32
    rotationAngle?: number;
  }
  interface Point {
    x?: string;
    y?: string;
  }
  interface Position {
    x?: string;
    y?: string;
    width?: string;
    height?: string;
  }
  interface Shape extends Item {
    type?: string;
    stroke?: Stroke;
    zIndex?: number; // int32
    position?: Position;
    rotationAngle?: number;
    windingType?: 0 | 1; // int32
    start?: Point;
    end?: Point;
    color?: string;
    overprints?: string[];
    cornerRadius?: string;
    curves?: Curve[];
    viewBox?: Position;
  }
  interface SimpleTextField extends Item {
    position?: Position;
    zIndex?: number; // int32
    content?: string;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    textOrientation?: string;
    blockFlowDirection?: string;
    inlineBaseDirection?: string;
    rotationAngle?: number;
    fontSize?: string;
    fontStyle?: string;
    fontFamily?: string;
    color?: string;
    overprints?: string[];
    stroke?: Stroke;
  }
  interface SpotColorGenerator {
    type?: string;
    color?: string;
  }
  interface Stroke {
    color?: string;
    overprints?: string[];
    thickness?: string;
    lineCap?: string;
    lineJoin?: string;
    dashPattern?: DashPattern;
  }
  interface TextArea extends Item {
    position?: Position;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    curveAlignment?: 0 | 1 | 2 | 3; // int32
    blockFlowDirection?: string;
    textFields?: TextField[];
    textOrientation?: string;
    rotationAngle?: number;
    zIndex?: number; // int32
    viewBox?: Position;
    curves?: Curve[];
    glyphRunOverrides?: GlyphRun[];
  }
  interface TextField extends Item {
    fontSize?: string;
    fontStyle?: string;
    fontFamily?: string;
    content?: string;
    color?: string;
    overprints?: string[];
    inlineBaseDirection?: string;
    stroke?: Stroke;
  }
}
