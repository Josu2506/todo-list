import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete a task', fakeAsync(() => {
    // Configura tareas iniciales
    component.tasks = [
      { id: 1, title: 'Task 1', completed: false, visible: true },
      { id: 2, title: 'Task 2', completed: false, visible: true },
    ];

    // Llama al método deleteTask para eliminar la tarea con id 1
    component.deleteTask(1);

    // Avanza el tiempo simulado para que se complete el setTimeout
    tick(300);

    // Verifica que la longitud de tasks sea 1
    expect(component.tasks.length).toBe(1);

    // Verifica que la tarea eliminada no esté en la lista
    expect(component.tasks.find(task => task.id === 1)).toBeUndefined();

    // Verifica que la tarea restante sea la correcta
    expect(component.tasks[0].title).toBe('Task 2');
  }));
});
