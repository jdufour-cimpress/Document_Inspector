export declare namespace MCP {
  type ColorType = 'color' | 'monochrome' | 'grayscale' | 'notApplicable';
  interface MicrosoftAspNetCoreJsonPatchOperationsOperation {
    value?: {};
    path?: string;
    op?: string;
    from?: string;
  }
  /**
   * Model of a path used in the svg object
   */
  interface SurfaceSpecificationModelsSvgV3Path {
    /**
     * Width of the stroke
     */
    strokeWidth?: string;
    /**
     * Stroke color
     */
    stroke?: string;
    /**
     * The fill for the path
     */
    fill?: string;
    /**
     * Hex value for the color of the stroke
     */
    fillRule?: string;
    /**
     * Coordinates of Line or Curve
     */
    d?: string;
  }
  /**
   * Model of an svg object
   */
  interface SurfaceSpecificationModelsSvgV3Svg {
    /**
     * Width of view box
     */
    width?: string;
    /**
     * Height of view box
     */
    height?: string;
    /**
     * View box for the svg
     */
    viewBox?: string;
    /**
     * Paths of the svg
     */
    path?: SurfaceSpecificationModelsSvgV3Path;
  }
  /**
   * Audit Summary
   */
  interface SurfaceSpecificationModelsV1AuditAuditSummary {
    /**
     * The surface set identifier.
     */
    id?: string; // uuid
    /**
     * The reference identifier.
     */
    referenceId?: string;
    /**
     * The tenant identifier.
     */
    tenantId?: string;
    /**
     * The username.
     */
    username?: string;
    /**
     * The modified date.
     */
    modifiedDate?: string; // date-time
    /**
     * The versions.
     */
    versions?: number /* int32 */[];
  }
  /**
   * Versioned Surface
   */
  interface SurfaceSpecificationModelsV1AuditVersionedSurface {
    /**
     * Gets the identifier.
     */
    id?: string; // uuid
    /**
     * The name of the surface
     */
    name?: string;
    /**
     * The type of the process
     */
    processType?: string;
    /**
     * The type of the color
     */
    colorType?: ColorType;
    /**
     * The width in cm
     */
    widthCm?: string;
    /**
     * The height in cm
     */
    heightCm?: string;
    /**
     * The location
     */
    location?: SurfaceSpecificationModelsV3Location;
    /**
     * Additional doc data
     */
    docAdditionalData?: SurfaceSpecificationModelsV3DocAdditionalData;
    /**
     * The total number of times this surface will be repeated consecutively.
     */
    totalRepeats?: string;
    /**
     * The maximum number of times this surface will be repeated consecutively ever.
     */
    maxRepeats?: number; // int32
    /**
     * The spot colors
     */
    spotColorSet?: SurfaceSpecificationModelsV3SpotColorsSpotColorSet;
    /**
     * A formula returning a boolean indicating if this surface is enabled
     */
    enabled?: string;
    /**
     * Gets or sets the username.
     */
    username?: string;
    /**
     * Gets or sets the modified date.
     */
    modifiedDate?: string; // date-time
    /**
     * Gets or sets the user who created the versioned surface.
     */
    createdBy?: string;
    /**
     * Gets or sets the date time when the versioned surface was created.
     */
    createdAt?: string; // date-time
  }
  /**
   * Versioned Surface Group
   */
  interface SurfaceSpecificationModelsV1AuditVersionedSurfaceGroup {
    /**
     * Gets the identifier.
     */
    id?: string; // uuid
    /**
     * Gets the surfaces.
     */
    surfaces?: SurfaceSpecificationModelsV1AuditVersionedSurface[];
    /**
     * Gets the description.
     */
    description?: string;
    /**
     * Gets the PrepressParametersUrl.
     */
    prepressParametersUrl?: string;
    /**
     * Gets the PrepressUrl.
     */
    prepressUrl?: string;
    /**
     * Gets the RenderingParametersUrl.
     */
    renderingParametersUrl?: string;
    /**
     * Gets the formula indicating if this SurfaceGroup is enabled.
     */
    enabled?: string;
    /**
     * Gets or sets the username.
     */
    username?: string;
    /**
     * Gets or sets the modified date.
     */
    modifiedDate?: string; // date-time
    /**
     * Gets or sets the user who created the versioned surface group.
     */
    createdBy?: string;
    /**
     * Gets or sets the date time when the versioned surface group was created.
     */
    createdAt?: string; // date-time
  }
  /**
   * Versioned Surface Set
   */
  interface SurfaceSpecificationModelsV1AuditVersionedSurfaceSet {
    /**
     * Gets the identifier.
     */
    id?: string; // uuid
    /**
     * Gets the ReferenceId
     */
    referenceId?: string;
    /**
     * The list of variables used to calculate a surface
     */
    variables?: string[];
    /**
     * Gets the surface groups.
     */
    surfaceGroups?: SurfaceSpecificationModelsV1AuditVersionedSurfaceGroup[];
    /**
     * Gets or sets the allowable color types.
     */
    allowableColorTypes?: ColorType[];
    /**
     * Gets or sets the allowable process types.
     */
    allowableProcessTypes?: string[];
    /**
     * Gets or sets the allowable locations.
     */
    allowableLocations?: string[];
    /**
     * The tenant identifier. Required if the supplied McpSku is a Reference Identifier.
     */
    tenantId?: string;
    /**
     * The surface set template reference identifier.
     */
    surfaceSetTemplateReferenceId?: string;
    /**
     * True if the Surface Set is out of sync with the surface set template. If it is not associated with a template, it will be null.
     */
    outOfSyncWithSurfaceSetTemplate?: boolean;
    /**
     * Gets or sets the username.
     */
    username?: string;
    /**
     * Gets or sets the modified date.
     */
    modifiedDate?: string; // date-time
    /**
     * The user who created the versioned surface set.
     */
    createdBy?: string;
    /**
     * The date time when the versioned surface set was created.
     */
    createdAt?: string; // date-time
    /**
     * The version of the surface set.
     */
    version?: number; // int32
  }
  /**
   * Model for representing links in results
   */
  interface SurfaceSpecificationModelsV1Link {
    /**
     * Resource link
     */
    href: string;
    /**
     * Relationship this link is to the source result
     */
    rel: string;
  }
  /**
   * This class holds of the doc-specific data that was present in various places in v2
   */
  interface SurfaceSpecificationModelsV3CalculatedDocAdditionalData {
    /**
     * List of Areas (Bleed, trim, etc) on this surface, assumed to be closed
     */
    masks?: SurfaceSpecificationModelsV3CalculatedPathGroup[];
    /**
     * List of Guides on this surface, assumed to be open
     */
    guides?: SurfaceSpecificationModelsV3CalculatedPathGroup[];
    /**
     * The mcp thread id that describes the color of this surface.
     * Required for embroidery products.  A list of valid thread values
     * can be found at http://embroidery.documents.cimpress.io/threads
     */
    substrateMatchingThreadColor?: string;
    /**
     * The Uds special rendering flag
     */
    udsRenderingFlag?: string;
    /**
     * The color of the engraving.
     */
    engravingColor?: string;
  }
  /**
   * Contains information to calculate a path
   */
  interface SurfaceSpecificationModelsV3CalculatedPath {
    /**
     * The calculation to get the X coordinate of the anchor for this area
     */
    anchorX: number; // double
    /**
     * The calculation to get the Y coordinate of the anchor for this area
     */
    anchorY: number; // double
    /**
     * The list of VariablePathPoints to render this area
     */
    pathPoints: SurfaceSpecificationModelsV3CalculatedPathPoint[];
  }
  /**
   * Defines a rectangle given an anchor coordinate and dimensions
   */
  interface SurfaceSpecificationModelsV3BoundsRectangle {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  }
  /**
   * Defines a bounding area
   */
  interface SurfaceSpecificationModelsV3BoundsBoundArea {
    type?: string;
    position?: SurfaceSpecificationModelsV3BoundsRectangle;
  }
  /**
   * Contains information for a group of paths of a similar type
   */
  interface SurfaceSpecificationModelsV3CalculatedPathGroup {
    /**
     * The type of the path. This can be one of the following values:
     * bleed, trim, safe, fold, ornament, or cut.
     */
    pathType: string;
    /**
     * The variable paths in this group
     */
    paths: SurfaceSpecificationModelsV3CalculatedPath[];

    boundingArea?: SurfaceSpecificationModelsV3BoundsBoundArea;
  }
  /**
   * Contains information to calculate a point path
   */
  interface SurfaceSpecificationModelsV3CalculatedPathPoint {
    /**
     * Ordinal to keep points in order
     */
    ordinal: number; // int32
    /**
     * The calculation to get the First control point X coordinate for this PathPoint
     */
    firstControlPointX?: number; // double
    /**
     * The calculation to get the First control point Y coordinate for this PathPoint
     */
    firstControlPointY?: number; // double
    /**
     * The calculation to get the Second control point X coordinate for this PathPoint
     */
    secondControlPointX?: number; // double
    /**
     * The calculation to get the Second control point Y coordinate for this PathPoint
     */
    secondControlPointY?: number; // double
    /**
     * The calculation to get the EndPoint X coordinate for this PathPoint
     */
    endPointX: number; // double
    /**
     * The calculation to get the EndPoint Y coordinate for this PathPoint
     */
    endPointY: number; // double
  }
  /**
   * This class holds of the doc-specific data that was present in various places in v2
   */
  interface SurfaceSpecificationModelsV3DocAdditionalData {
    /**
     * List of Areas (Bleed, trim, etc) on this surface, assumed to be closed
     */
    masks?: SurfaceSpecificationModelsV3PathGroup[];
    /**
     * List of Guides on this surface, assumed to be open
     */
    guides?: SurfaceSpecificationModelsV3PathGroup[];
    /**
     * The mcp thread id that describes the color of this surface.
     * Required for embroidery products.  A list of valid thread values
     * can be found at http://embroidery.documents.cimpress.io/threads
     */
    substrateMatchingThreadColor?: string;
    /**
     * The Uds special rendering flag
     */
    udsRenderingFlag?: string;
    /**
     * The color of the engraving.
     */
    engravingColor?: string;
  }
  /**
   * Location model
   */
  interface SurfaceSpecificationModelsV3Location {
    /**
     * The name of the location
     */
    name: string;
    /**
     * The description of the location
     */
    description?: string;
  }
  /**
   * The ornament
   */
  interface SurfaceSpecificationModelsV3OrnamentsDynamicOrnament {
    /**
     * The description
     */
    description?: string;
    /**
     * The spacing between the ornaments
     */
    spacing: string;
    /**
     * The ornament placement strategy
     */
    strategy: string;
    /**
     * The padding
     */
    padding?: SurfaceSpecificationModelsV3OrnamentsPadding;
    /**
     * The ornament type
     */
    ornamentType: string;
    /**
     * Enabled Flag
     */
    enabled: string;
  }
  /**
   * The ornament set
   */
  interface SurfaceSpecificationModelsV3OrnamentsOrnamentSet {
    /**
     * The description
     */
    description?: string;
    /**
     * A list of a known number of ornaments
     */
    staticOrnaments?: SurfaceSpecificationModelsV3OrnamentsStaticOrnament[];
    /**
     * The list of all dynamic ornaments
     */
    dynamicOrnaments?: SurfaceSpecificationModelsV3OrnamentsDynamicOrnament[];
    /**
     * Enabled Flag
     */
    enabled: string;
  }
  /**
   * The padding for a surface ornament
   */
  interface SurfaceSpecificationModelsV3OrnamentsPadding {
    /**
     * The top padding for the ornament path
     */
    paddingTop?: string;
    /**
     * The bottom padding for the ornament path
     */
    paddingBottom?: string;
    /**
     * The left padding for the ornament path
     */
    paddingLeft?: string;
    /**
     * The right padding for the ornament path
     */
    paddingRight?: string;
  }
  /**
   * The static ornament
   */
  interface SurfaceSpecificationModelsV3OrnamentsStaticOrnament {
    /**
     * The description
     */
    description?: string;
    /**
     * The ornament type
     */
    ornamentType: string;
    /**
     * The distance from the left side of the surface
     */
    leftCm: string;
    /**
     * The distance from the top side of the surface
     */
    topCm: string;
    /**
     * Enabled Flag
     */
    enabled: string;
  }
  /**
   * Contains information to calculate a path
   */
  interface SurfaceSpecificationModelsV3Path {
    /**
     * The calculation to get the X coordinate of the anchor for this area
     */
    anchorX?: string;
    /**
     * The calculation to get the Y coordinate of the anchor for this area
     */
    anchorY?: string;
    /**
     * The list of VariablePathPoints to render this area
     */
    pathPoints: SurfaceSpecificationModelsV3PathPoint[];
    /**
     * Calculation that if set is used to determine if this Path is enabled
     */
    enabled?: string;
  }
  /**
   * Contains information for a group of paths of a similar type
   */
  interface SurfaceSpecificationModelsV3PathGroup {
    /**
     * The type of the path. This can be a formula or one of the following values:
     * bleed, trim, safe, fold, ornament, or cut.
     */
    pathType: string;
    /**
     * The variable paths in this group
     */
    paths: SurfaceSpecificationModelsV3Path[];
    /**
     * Calculation that if set is used to determine if this PathGroup is enabled
     */
    enabled?: string;
  }
  /**
   * Contains information to calculate a point path
   */
  interface SurfaceSpecificationModelsV3PathPoint {
    /**
     * Ordinal to keep points in order
     */
    ordinal: number; // int32
    /**
     * The calculation to get the First control point X coordinate for this PathPoint
     */
    firstControlPointX?: string;
    /**
     * The calculation to get the First control point Y coordinate for this PathPoint
     */
    firstControlPointY?: string;
    /**
     * The calculation to get the Second control point X coordinate for this PathPoint
     */
    secondControlPointX?: string;
    /**
     * The calculation to get the Second control point Y coordinate for this PathPoint
     */
    secondControlPointY?: string;
    /**
     * The calculation to get the EndPoint X coordinate for this PathPoint
     */
    endPointX: string;
    /**
     * The calculation to get the EndPoint Y coordinate for this PathPoint
     */
    endPointY: string;
  }
  /**
   * Calculated Spot Color
   */
  interface SurfaceSpecificationModelsV3SpotColorsCalculatedSpotColor {
    /**
     * The name of the spot color
     */
    name: string;
  }
  /**
   * The calculated spot color group model
   */
  interface SurfaceSpecificationModelsV3SpotColorsCalculatedSpotColorGroup {
    /**
     * The minimum amount of spot colors in the group
     */
    minNumberSpotColors: number; // int32
    /**
     * The maximum amount of spot colors in the group
     */
    maxNumberSpotColors: number; // int32
    /**
     * The description of the group
     */
    description: string;
    /**
     * The available spot colors url.
     */
    availableSpotColorsUrl?: string;
    /**
     * The available spot colors
     */
    availableSpotColors: SurfaceSpecificationModelsV3SpotColorsCalculatedSpotColor[];
  }
  /**
   * The calculated spot color set model
   */
  interface SurfaceSpecificationModelsV3SpotColorsCalculatedSpotColorSet {
    /**
     * The minimum amount of spot colors total
     */
    totalMinSpotColors: number; // int32
    /**
     * The maximum amount of spot colors total
     */
    totalMaxSpotColors: number; // int32
    /**
     * The description of the spot color set
     */
    description: string;
    /**
     * The spot color groups
     */
    spotColorGroups: SurfaceSpecificationModelsV3SpotColorsCalculatedSpotColorGroup[];
  }
  /**
   * The spot color model
   */
  interface SurfaceSpecificationModelsV3SpotColorsSpotColor {
    /**
     * The name of the spot color
     */
    name: string;
    /**
     * The enabled flag.
     */
    enabled?: string;
  }
  /**
   * The spot color group model
   */
  interface SurfaceSpecificationModelsV3SpotColorsSpotColorGroup {
    /**
     * The minimum amount of spot colors in the group
     */
    minNumberSpotColors: string;
    /**
     * The maximum amount of spot colors in the group
     */
    maxNumberSpotColors: string;
    /**
     * The description of the group
     */
    description: string;
    /**
     * The available spot colors url.
     */
    availableSpotColorsUrl?: string;
    /**
     * The available spot colors
     */
    availableSpotColors: SurfaceSpecificationModelsV3SpotColorsSpotColor[];
    /**
     * The enabled flag.
     */
    enabled?: string;
  }
  /**
   * Spot color set model
   */
  interface SurfaceSpecificationModelsV3SpotColorsSpotColorSet {
    /**
     * The minimum amount of spot colors total
     */
    totalMinSpotColors: string;
    /**
     * The maximum amount of spot colors total
     */
    totalMaxSpotColors: string;
    /**
     * The description of the spot color set
     */
    description: string;
    /**
     * The spot color groups
     */
    spotColorGroups: SurfaceSpecificationModelsV3SpotColorsSpotColorGroup[];
    /**
     * The enabled flag.
     */
    enabled?: string;
  }
  /**
   * Surface group request model
   */
  interface SurfaceSpecificationModelsV3SurfaceGroupRequest {
    /**
     * The total number of times this surface will be repeated consecutively.
     */
    totalSurfaceRepeats?: string;
    /**
     * The maximum number of times this surface will be repeated consecutively ever.
     */
    maxSurfaceRepeats?: number; // int32
    /**
     * The surfaces
     */
    surfaces: SurfaceSpecificationModelsV3SurfaceRequest[];
    /**
     * The description
     */
    description?: string;
    /**
     * The Prepress Parameters Url
     */
    prepressParametersUrl?: string;
    /**
     * The Prepress Url
     */
    prepressUrl?: string;
    /**
     * The Rendering Parameters Url
     */
    renderingParametersUrl?: string;
    /**
     * The enabled flag/formula.
     */
    enabled?: string;
  }
  /**
   * Surface request model
   */
  interface SurfaceSpecificationModelsV3SurfaceRequest {
    /**
     * The name of the surface
     */
    name: string;
    /**
     * The type of the process. This can be a formula or one of the following values: none, offset, digital,
     * offsetOrDigital, heatTransfer, laserEngraving, screenPrint, padPrint, inkJet, thermography,
     * embroidery flat, embroideryCylinder, sublimation, or unknown.
     */
    processType: string;
    /**
     * The type of the color. This can be a formula or one of the following values: notApplicable, color,
     * grayscale, or monochrome.
     */
    colorType: ColorType;
    /**
     * The width in cm
     */
    widthCm: string;
    /**
     * The height in cm
     */
    heightCm: string;
    /**
     * The location
     */
    location: SurfaceSpecificationModelsV3Location;
    /**
     * Additional doc data
     */
    docAdditionalData?: SurfaceSpecificationModelsV3DocAdditionalData;
    /**
     * The spot colors
     */
    spotColorSet?: SurfaceSpecificationModelsV3SpotColorsSpotColorSet;
    /**
     * The ornament set
     */
    ornamentSet?: SurfaceSpecificationModelsV3OrnamentsOrnamentSet;
    /**
     * The total number of times this surface will be repeated consecutively.
     */
    totalRepeats?: string;
    /**
     * The maximum number of times this surface will be repeated consecutively ever.
     */
    maxRepeats?: number; // int32
    /**
     * A formula returning a boolean indicating if this surface is enabled
     */
    enabled?: string;
    /**
     * If true, this surface will not be repeated as part of a surface group's repeats. This field defaults to false and is otherwise ignored.
     */
    ignoreForRepeats?: string;
  }
  /**
   * Surface set request model
   */
  interface SurfaceSpecificationModelsV3SurfaceSetRequest {
    /**
     * The surface groups. Required if the SurfaceSetTemplateReferenceId is not populated
     */
    surfaceGroups?: SurfaceSpecificationModelsV3SurfaceGroupRequest[];
    /**
     * The MCP sku or a Reference Identifier
     */
    mcpSku: string;
    /**
     * The list of variables used to calculate a surface
     */
    variables?: string[];
    /**
     * Gets or sets the allowable color types.
     */
    allowableColorTypes?: ColorType[];
    /**
     * Gets or sets the allowable process types.
     */
    allowableProcessTypes?: string[];
    /**
     * Gets or sets the allowable locations.
     */
    allowableLocations?: string[];
    /**
     * The surface set template reference identifier.
     * If present, then the SurfaceGroups field should not be supplied as surface data will be copied from the Surface Set Template.
     */
    surfaceSetTemplateReferenceId?: string;
    /**
     * The tenant identifier. Required if the supplied McpSku is a Reference Identifier.
     */
    tenantId?: string;
  }
  /**
   * Calculated Surface
   */
  interface SurfaceSpecificationSvcModelsV3CalculatedSurface {
    /**
     * The identifier.
     */
    id: string; // uuid
    /**
     * The name of the surface
     */
    name: string;
    /**
     * The type of the process. This can one of the following values: none, offset, digital,
     * offsetOrDigital, heatTransfer, laserEngraving, screenPrint, padPrint, inkJet, thermography,
     * embroidery flat, embroideryCylinder, sublimation, or unknown.
     */
    processType: string;
    /**
     * The type of the color. This can be one of the following values: notApplicable, color, grayscale, or monochrome.
     */
    colorType: ColorType;
    /**
     * The width in cm
     */
    widthCm: number; // double
    /**
     * The height in cm
     */
    heightCm: number; // double
    /**
     * The location
     */
    location: SurfaceSpecificationModelsV3Location;
    /**
     * Additional doc data
     */
    docAdditionalData?: SurfaceSpecificationModelsV3CalculatedDocAdditionalData;
    /**
     * The calculated spot colors
     */
    spotColorSet?: SurfaceSpecificationModelsV3SpotColorsCalculatedSpotColorSet;
    /**
     * The calculated ornament
     */
    ornamentSet?: SurfaceSpecificationSvcModelsV3OrnamentsCalculatedOrnamentCoordinateSet;
  }
  /**
   * Calculated Surface Group
   */
  interface SurfaceSpecificationSvcModelsV3CalculatedSurfaceGroup {
    /**
     * Gets or sets the identifier.
     */
    id?: string; // uuid
    /**
     * Gets or sets the surfaces.
     */
    surfaces: SurfaceSpecificationSvcModelsV3CalculatedSurface[];
    /**
     * Gets or sets the description.
     */
    description?: string;
    /**
     * The prepress url
     */
    prepressUrl?: string;
    /**
     * The prepress parameters url
     */
    prepressParametersUrl?: string;
  }
  /**
   * Calculated Surface Set
   */
  interface SurfaceSpecificationSvcModelsV3CalculatedSurfaceSet {
    /**
     * The MCP sku
     */
    mcpSku: string;
    /**
     * The surface groups
     */
    surfaceGroups: SurfaceSpecificationSvcModelsV3CalculatedSurfaceGroup[];
  }
  /**
   * The href link
   */
  interface SurfaceSpecificationSvcModelsV3HrefLink {
    /**
     * The url to the resource
     */
    href?: string;
  }
  /**
   * The link model
   */
  interface SurfaceSpecificationSvcModelsV3Links {
    /**
     * The url to the resource
     */
    self?: SurfaceSpecificationSvcModelsV3HrefLink;
  }
  /**
   * The calculated ornament set with final coordinates
   */
  interface SurfaceSpecificationSvcModelsV3OrnamentsCalculatedOrnamentCoordinateSet {
    /**
     * The description
     */
    description?: string;
    /**
     * The calculated ornament
     */
    ornamentGroups?: SurfaceSpecificationSvcModelsV3OrnamentsCalculatedOrnamentGroup[];
  }
  /**
   * The ornament
   */
  interface SurfaceSpecificationSvcModelsV3OrnamentsCalculatedOrnamentGroup {
    /**
     * The ornament type
     */
    ornamentType: string;
    /**
     * The positions of the ornaments
     */
    positions?: SurfaceSpecificationSvcModelsV3OrnamentsPosition[];
  }
  /**
   * The position
   */
  interface SurfaceSpecificationSvcModelsV3OrnamentsPosition {
    /**
     * The distance from the left side of the surface
     */
    leftCm: number; // double
    /**
     * The distance from the top side of the surface
     */
    topCm: number; // double
  }
  /**
   * Surface model
   */
  interface SurfaceSpecificationSvcModelsV3Surface {
    /**
     * The surface identifier.
     */
    id: string; // uuid
    /**
     * Links associated with the surface
     */
    links: SurfaceSpecificationModelsV1Link[];
    /**
     * The name of the surface
     */
    name: string;
    /**
     * The type of the process. This can be a formula or one of the following values: none, offset, digital,
     * offsetOrDigital, heatTransfer, laserEngraving, screenPrint, padPrint, inkJet, thermography,
     * embroidery flat, embroideryCylinder, sublimation, or unknown.
     */
    processType: string;
    /**
     * The type of the color. This can be a formula or one of the following values: notApplicable, color,
     * grayscale, or monochrome.
     */
    colorType: ColorType;
    /**
     * The width in cm
     */
    widthCm: string;
    /**
     * The height in cm
     */
    heightCm: string;
    /**
     * The location
     */
    location: SurfaceSpecificationModelsV3Location;
    /**
     * Additional doc data
     */
    docAdditionalData?: SurfaceSpecificationModelsV3DocAdditionalData;
    /**
     * The spot colors
     */
    spotColorSet?: SurfaceSpecificationModelsV3SpotColorsSpotColorSet;
    /**
     * The ornament set
     */
    ornamentSet?: SurfaceSpecificationModelsV3OrnamentsOrnamentSet;
    /**
     * The total number of times this surface will be repeated consecutively.
     */
    totalRepeats?: string;
    /**
     * The maximum number of times this surface will be repeated consecutively ever.
     */
    maxRepeats?: number; // int32
    /**
     * A formula returning a boolean indicating if this surface is enabled
     */
    enabled?: string;
    /**
     * If true, this surface will not be repeated as part of a surface group's repeats. This field defaults to false and is otherwise ignored.
     */
    ignoreForRepeats?: string;
  }
  /**
   * Surface group model
   */
  interface SurfaceSpecificationSvcModelsV3SurfaceGroup {
    /**
     * The surface group identifier.
     */
    id: string; // uuid
    /**
     * Links associated with the surface group
     */
    readonly links: SurfaceSpecificationModelsV1Link[];
    /**
     * The surfaces
     */
    readonly surfaces: SurfaceSpecificationSvcModelsV3Surface[];
    /**
     * The description
     */
    readonly description?: string;
    /**
     * The Prepress Parameters Url
     */
    readonly prepressParametersUrl?: string;
    /**
     * The Prepress Url
     */
    readonly prepressUrl?: string;
    /**
     * The Rendering Parameters Url
     */
    readonly renderingParametersUrl?: string;
    /**
     * Gets the formula indicating if this SurfaceGroup is enabled.
     */
    readonly enabled?: string;
    /**
     * The total number of times the collection of surfaces in the group will be
     * repeated within the group when calculated
     */
    readonly totalSurfaceRepeats?: string;
    /**
     * The maximum number of times the collection of surfaces in the group will be
     * repeated within the group when calculated
     */
    readonly maxSurfaceRepeats?: number; // int32
  }
  /**
   * Surface set model
   */
  interface SurfaceSpecificationSvcModelsV3SurfaceSet {
    /**
     * Links associated with the surface set
     */
    readonly links: SurfaceSpecificationModelsV1Link[];
    /**
     * HAL json formatted links associated with the surface set
     */
    readonly _links: SurfaceSpecificationSvcModelsV3Links;
    /**
     * The MCP sku
     */
    readonly mcpSku: string;
    /**
     * The last user to make an update.
     */
    readonly updatedBy?: string;
    /**
     * The Surface Set template reference identifier.
     */
    readonly surfaceSetTemplateReferenceId?: string;
    /**
     * True if the Surface Set is out of sync with the surface set template. If it is not associated with a template, it will be null.
     */
    readonly outOfSyncWithSurfaceSetTemplate?: boolean;
    /**
     * The list of variables used to calculate a surface
     */
    readonly variables?: string[];
    /**
     * Gets the allowable color types.
     */
    readonly allowableColorTypes?: ColorType[];
    /**
     * Gets the allowable process types.
     */
    readonly allowableProcessTypes?: string[];
    /**
     * Gets the allowable locations.
     */
    readonly allowableLocations?: string[];
    /**
     * The surface groups
     */
    readonly surfaceGroups: SurfaceSpecificationSvcModelsV3SurfaceGroup[];
  }
}
