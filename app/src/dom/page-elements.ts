class PageElements {
  private static _instance: PageElements;

  readonly diagramDiv: HTMLDivElement;
  readonly paletteDiv: HTMLDivElement;
  readonly tooltip: HTMLDivElement;
  
  readonly saveButton: HTMLButtonElement;
  readonly loadButton: HTMLButtonElement;
  readonly addGirlButton: HTMLButtonElement;
  readonly addBoyButton: HTMLButtonElement;
  readonly exportToPngButton: HTMLButtonElement;
  readonly exportToSvgButton: HTMLButtonElement;
  readonly toggleGroupsButton: HTMLButtonElement;
  readonly undoButton: HTMLButtonElement;
  readonly redoButton: HTMLButtonElement;
  
  readonly selectedPerson: HTMLSpanElement;
  readonly tooltipFrom: HTMLSpanElement;
  readonly tooltipTo: HTMLSpanElement;

  constructor() {
    this.diagramDiv = document.getElementById("diagram") as HTMLDivElement;
    this.paletteDiv = document.getElementById("palette") as HTMLDivElement;
    this.saveButton = document.getElementById(
      "save-button"
    ) as HTMLButtonElement;
    this.loadButton = document.getElementById(
      "load-button"
    ) as HTMLButtonElement;
    this.addGirlButton = document.getElementById(
      "add-girl-button"
    ) as HTMLButtonElement;
    this.addBoyButton = document.getElementById(
      "add-boy-button"
    ) as HTMLButtonElement;
    this.exportToPngButton = document.getElementById(
      "export-to-png-button"
    ) as HTMLButtonElement;
    this.exportToSvgButton = document.getElementById(
      "export-to-svg-button"
    ) as HTMLButtonElement;
    this.toggleGroupsButton = document.getElementById(
      "toggle-groups-button"
    ) as HTMLButtonElement;
    this.undoButton = document.getElementById(
      "undo-button"
    ) as HTMLButtonElement;
    this.redoButton = document.getElementById(
      "redo-button"
    ) as HTMLButtonElement;
    this.selectedPerson = document.getElementById(
      "selected-person"
    ) as HTMLSpanElement;
    this.tooltip = document.getElementById(
      "tooltip"
    ) as HTMLDivElement;
    this.tooltipFrom = document.getElementById(
      "tooltip-from"
    ) as HTMLSpanElement;
    this.tooltipTo = document.getElementById(
      "tooltip-to"
    ) as HTMLSpanElement;
  }

  static getInstance(): PageElements {
    if (!PageElements._instance) {
      PageElements._instance = new PageElements();
    }
    return PageElements._instance;
  }
}

export const pageElements = PageElements.getInstance();