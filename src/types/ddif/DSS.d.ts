import { MCP } from './MCP';
import { UDS } from './UDS';

/*

IMPORTANT: Any updates made to these interfaces should be accompanied by corresponding
changes to the OpenAPI definitions in /src/config/definitions.yaml

*/

// Type definitions for Vistaprint-owned entities that are relevant to design specifications.
export declare namespace DSS {
  type ColorMode = 'print' | 'web';

  const enum DocumentSourceType {
    TEMPLATE_TOKEN = 'TEMPLATE_TOKEN',
    MATCHING_SIGNATURE = 'MATCHING_SIGNATURE',
    NONE = 'NONE',
    FULLBLEED = 'FULLBLEED',
    LEGACY = 'LEGACY_DOCUMENT',
  }

  /**
   * Vistaprint product specifications fetch their surface sets directly from MCP.
   */
  interface ProductSpecification {
    message: string;
    calculatedSurfaceSets: MCP.SurfaceSpecificationSvcModelsV3CalculatedSurfaceSet;
  }

  /**
   * A design document is required to adhere to the CDIF format, including the shape of the document itself.
   */
  interface DesignDocument extends UDS.CimpressDocument {
    document: UDS.DesignDocumentWithPanels;
    metadata?: Metadata;
  }

  interface Product {
    productKey: string;
    optionSelections: ProductOptions;
  }

  interface ProductOptions {
    [key: string]: string;
  }

  interface SkuVariables {
    [key: string]: string;
  }

  interface DesignSpecification {
    views: MCP.SurfaceSpecificationSvcModelsV3CalculatedSurface[];
    designDocument: DSS.DesignDocument;
    mcpSku?: string;
    skuVariables?: DSS.SkuVariables;
  }

  interface Metadata {
    template: DesignerTemplateMetadata[];
    savedPanels?: SavedPanelSourceMap[];
    documentSources?: DocumentSources;
    surfaceUpsells?: SurfaceUpsell[];
    // added by UDSIS for imported legacy documents
    vistaprint?: object;
  }

  interface SurfaceUpsell {
    document?: DSS.DesignDocument;
    upsellOffered: boolean;
    panelName: string;
    optionName: string;
    optionValue: string;
  }

  interface Locks {
    edit?: boolean;
    transform?: boolean;
    zIndex?: boolean;
    overrides?: object;
  }

  interface DesignerTemplateMetadata {
    id: string;
    locks: Locks;
    placeholder?: string | boolean | undefined;
  }

  interface DesignerTemplateTextMetadata extends DesignerTemplateMetadata {
    label?: string;
    placeholder?: string;
  }

  interface DesignerTemplateImagePlaceholderMetadata extends DesignerTemplateMetadata {
    placeholder: boolean;
  }

  /*
   * Right now we only have 1 type of source which is panels, but once we know of other source types it may be valuable
   * for each of them to have their own interfaces.
   */

  interface DocumentSources {
    panels: DocumentPanelSource[];
  }

  interface DocumentPanelSource {
    id?: string;
    source: DocumentSourceType;
    data?: string;
  }

  interface SavedPanelSourceMap {
    panel: UDS.DesignSurface;
    source?: DocumentPanelSource;
    template?: DesignerTemplateMetadata[];
  }

  interface DocumentPanelSpecification {
    panelSource: DocumentPanelSource;
    panelTarget: MCP.SurfaceSpecificationSvcModelsV3CalculatedSurface;
  }

  interface DocumentSpecification {
    panels: DocumentPanelSpecification[];
  }
}
