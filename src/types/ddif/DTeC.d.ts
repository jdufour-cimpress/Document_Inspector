export declare namespace DTeC {
  type PanelType = 'front' | 'inside' | 'back';
  type FinishType = 'metallic' | 'raisedInk' | 'raisedFoilGold' | 'raisedFoilSilver';

  interface EnsembleDto {
    readonly ensembleId?: string;
    readonly ensembleLineId?: string;
    readonly designUseCaseId?: string;
    readonly designConceptId?: string;
    readonly supplementalTemplates?: EnsembleTemplateDto[];
    readonly templates?: EnsembleTemplateDto[];
    readonly modifiedTime?: string; // date-time
  }
  interface EnsemblePanelDpsDto {
    ensemblePanelType: PanelType;
    designPhysicalSpecId: string;
  }
  interface EnsembleSearchByDucDpsRequestDto {
    designUseCases: string[];
    ensembleDesignPhysicalSpecConfig: EnsemblePanelDpsDto[];
  }
  interface FontReferenceDto {
    family?: string;
    style?: string;
  }
  interface RGBColorProfile {
    r: number; // int32
    g: number; // int32
    b: number; // int32
  }
  interface WeightedColor {
    rgb?: RGBColorProfile;
    weight: number; // double
  }
  interface TemplateDesignPropertiesDto {
    numberOfPlaceholders: number;
    textPurposeNames?: string[];
    availableFinishes?: FinishType[];
    fontReferences?: FontReferenceDto[];
    colorVariantDifferentialColors?: WeightedColor[];
    colorComposition?: WeightedColor[];
  }
  interface EnsembleTemplateDto {
    readonly ensemblePanelType: PanelType;
    readonly templateToken: string;
    readonly templateId?: string;
    designPhysicalSpecId?: string;
    designProperties?: TemplateDesignPropertiesDto;
    modifiedTime?: string; // date-time
  }
  interface PanelQueryRequest {
    templateToken?: string;
    panelSpecifications?: PanelSpecification[];
  }
  interface PanelSpecification {
    surfaceType?: PanelType;
    designPhysicalSpecId?: string;
  }
  interface UIDesignTemplateDto {
    version?: string;
    templateToken?: string;
    surfaceType?: PanelType;
    designConceptId?: string;
    designUseCaseId?: string;
    designPhysicalSpecId?: string;
    readonly templateLineRecordId?: string;
    lastModified?: string; // date-time
    metadata?: {};
  }
  interface UIDesignTemplatePageDto {
    readonly nextPageToken?: string;
    readonly designTemplates?: UIDesignTemplateDto[];
  }
}
