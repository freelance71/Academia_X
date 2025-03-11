import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  cursos = ['Angular 🅰️', 'Flutter 💙', 'React ⚛️']

  getCursos(): string []{
    return this.cursos
  }

  getCursosPorId (id : number = 0){
    return this.cursos[id]
  }

}

//test
import { TestBed } from '@angular/core/testing';


describe('CursosService', () => {
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosService]
    });
    service = TestBed.inject(CursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCursos should return all courses', () => {
    const expectedCourses = ['Angular 🅰️', 'Flutter 💙', 'React ⚛️'];
    expect(service.getCursos()).toEqual(expectedCourses);
  });

  it('getCursosPorId should return the course at the given index', () => {
    const expectedCourse1 = 'Angular 🅰️';
    const expectedCourse2 = 'Flutter 💙';

    expect(service.getCursosPorId(0)).toEqual(expectedCourse1);
    expect(service.getCursosPorId(1)).toEqual(expectedCourse2);
  });

});