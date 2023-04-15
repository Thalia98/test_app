import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should filter images by ID', () => {
    component.idFilter = '10';
    component.applyFilters();
    expect(component.filteredImages.length).toBeGreaterThan(0);
    expect(component.filteredImages.every((image) => image.id.toString().includes(component.idFilter))).toBeTrue();
  });

  it('should filter images by text', () => {
    component.textFilter = 'Vivamus';
    component.applyFilters();
    expect(component.filteredImages.length).toBeGreaterThan(0);
    expect(component.filteredImages.every((image) => image.text.toLowerCase().includes(component.textFilter.toLowerCase()))).toBeTrue();
  });

  it('should filter images by ID and text', () => {
    component.idFilter = '16';
    component.textFilter = 'Vivamus';
    component.applyFilters();
    expect(component.filteredImages.length).toBeGreaterThan(0);
    expect(component.filteredImages.every((image) => image.id.toString().includes(component.idFilter))).toBeTrue();
    expect(component.filteredImages.every((image) => image.text.toLowerCase().includes(component.textFilter.toLowerCase()))).toBeTrue();
  });
});