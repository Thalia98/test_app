import { Component } from '@angular/core';
import { Image } from './interface/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  idFilter = '';
  textFilter = '';
  filteredImages: Image[];

  randomImages: Image[];
  private loremIpsumTexts = [
    "Proin ultricies mauris ut est fringilla.",
    "Cras in lacus consectetur, faucibus diam non, faucibus magna.",
    "Nam cursus turpis vel lacus gravida vestibulum.",
    "Ut laoreet nunc sit amet odio efficitur feugiat.",
    "Vivamus at pretium turpis.",
  ];

  constructor() {
    this.randomImages = Array.from({ length: 4000 }, this.generateRandomImage);
    this.filteredImages = this.randomImages.slice();
  }

  /**
   * Generate random image from url
   * @returns 
   */
  private generateRandomImage = (): Image => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const photo = `https://picsum.photos/id/${id}/500/500`;
    const text = 'ID: ' + id + ' ' + this.loremIpsumTexts[Math.floor(Math.random() * this.loremIpsumTexts.length)];
    return { id, photo, text };
  };

  /**
   * Apply filters that the user has placed 
   */
  applyFilters(): void {
    let filtered = this.randomImages;

    if (this.idFilter !== '' && this.idFilter !== null) {
      filtered = filtered.filter((image) => image.id.toString().includes(this.idFilter));
    }

    if (this.textFilter !== '') {
      const searchText = this.textFilter.toLowerCase();
      filtered = filtered.filter((image) => image.text.toLowerCase().includes(searchText));
    }

    this.filteredImages = filtered;
  }

  /**
   * Remove all filters
   */
  removeFilters(): void {
    this.idFilter = '';
    this.textFilter = '';
    this.filteredImages = this.randomImages;
  }
}
