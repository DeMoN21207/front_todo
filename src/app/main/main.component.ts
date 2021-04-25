import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  /**
   * Статус кнопки
   */
  buttonStatus: boolean = false;
  /**
   * Флаг загрузки формы
   */
  isLoad: any;
  /**
   * Тестовые данные для отрисовки
   */
  testData = [{
    text: 'Простейшая задача',
    order: 1,
    date: 'today',
    mark: 'work'
  }];

  constructor() {
  }

  /**
   * Инициализация компонента
   */
  ngOnInit(): void {
    this.isLoad = true;
  }

  /**
   * Добавить задачу
   */
  addTask() {
    this.buttonStatus = true;
  }

  /**
   * Отменить добавление
   */
  cancelTask() {
    this.buttonStatus = false;
  }

  //TODO 1.Для работы с датой использовать momentjs
  //TODO 2.Для редактирование заметок будет сделан диалог, намного быстрее реализовать редактирование записи, чем пилить динамические формы
  //TODO 3.Нужно будет повесить гуарды для авторизации и скорее всего посмотреть на JWT реализацию
  //TODO 4.Авторизация будет на бэке в symfony и редиректить на фронт часть
}
