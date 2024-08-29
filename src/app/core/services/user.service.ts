import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { AddUser, ID, User } from '../models/User';

@Injectable()
export class UserService {
  private users$ = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  fetchAllUsers(): Observable<User[]> {
    return of<User[]>(MOCK_DATA).pipe(
      switchMap((users: User[]) => {
        this.users$.next(users);
        return this.getAllUsersObs();
      })
    );

    // todo : change next obs
    // this.http
    //   .get<User[]>('getUsers url')
    //   .pipe(tap((users) => this.users$.next(users)))
    //   .subscribe();
  }

  getAllUsersObs(): Observable<User[]> {
    return this.users$;
  }

  adduser(user: AddUser) {
    const newArr = [...this.users$.value, { ...user, id: Math.random() }];
    this.users$.next(newArr);
  }

  editUser(updatedUser: User) {
    const newArr = this.users$.value.map((user) => (updatedUser.id === user.id ? updatedUser : user));
    this.users$.next(newArr);
  }

  deleteUsers(ids: ID[]) {
    const newArr = this.users$.value.filter((user) => !ids.includes(user.id));
    this.users$.next(newArr);
  }
}

const MOCK_DATA: User[] = [
  { id: 100, name: 'Иван', surname: 'Иванов', email: 'ivan.ivanov1@example.com', phone: '+71234567891' },
  { id: 101, name: 'Анна', surname: 'Смирнова', email: 'anna.smirnova2@example.com', phone: '+71234567892' },
  { id: 102, name: 'Алексей', surname: 'Кузнецов', email: 'alexey.kuznetsov3@example.com', phone: '+71234567893' },
  { id: 103, name: 'Мария', surname: 'Попова', email: 'maria.popova4@example.com', phone: '+71234567894' },
  { id: 104, name: 'Дмитрий', surname: 'Васильев', email: 'dmitry.vasiliev5@example.com', phone: '+71234567895' },
  { id: 105, name: 'Елена', surname: 'Петрова', email: 'elena.petrova6@example.com', phone: '+71234567896' },
  { id: 106, name: 'Николай', surname: 'Соколов', email: 'nikolay.sokolov7@example.com', phone: '+71234567897' },
  { id: 107, name: 'Ольга', surname: 'Михайлова', email: 'olga.mikhailova8@example.com', phone: '+71234567898' },
  { id: 108, name: 'Сергей', surname: 'Фёдоров', email: 'sergey.fedorov9@example.com', phone: '+71234567899' },
  { id: 109, name: 'Алина', surname: 'Морозова', email: 'alina.morozova10@example.com', phone: '+71234567900' },
  { id: 110, name: 'Максим', surname: 'Новиков', email: 'maxim.novikov11@example.com', phone: '+71234567901' },
  { id: 111, name: 'Виктория', surname: 'Егорова', email: 'victoria.egorova12@example.com', phone: '+71234567902' },
  { id: 112, name: 'Артём', surname: 'Павлов', email: 'artyom.pavlov13@example.com', phone: '+71234567903' },
  { id: 113, name: 'Ксения', surname: 'Алексеенко', email: 'ksenia.alekseenko14@example.com', phone: '+71234567904' },
  { id: 114, name: 'Игорь', surname: 'Захаров', email: 'igor.zakharov15@example.com', phone: '+71234567905' },
  { id: 115, name: 'Юлия', surname: 'Беляева', email: 'yulia.belyaeva16@example.com', phone: '+71234567906' },
  { id: 116, name: 'Роман', surname: 'Сидоров', email: 'roman.sidorov17@example.com', phone: '+71234567907' },
  { id: 117, name: 'София', surname: 'Волкова', email: 'sofia.volkova18@example.com', phone: '+71234567908' },
  { id: 118, name: 'Павел', surname: 'Киселёв', email: 'pavel.kiselev19@example.com', phone: '+71234567909' },
  { id: 119, name: 'Алиса', surname: 'Гаврилова', email: 'alisa.gavrilova20@example.com', phone: '+71234567910' },
  { id: 120, name: 'Владимир', surname: 'Тихонов', email: 'vladimir.tikhonov21@example.com', phone: '+71234567911' },
  { id: 121, name: 'Екатерина', surname: 'Лебедева', email: 'ekaterina.lebedeva22@example.com', phone: '+71234567912' },
  { id: 122, name: 'Константин', surname: 'Семенов', email: 'konstantin.semenov23@example.com', phone: '+71234567913' },
  { id: 123, name: 'Людмила', surname: 'Борисова', email: 'lyudmila.borisova24@example.com', phone: '+71234567914' },
  { id: 124, name: 'Григорий', surname: 'Яковлев', email: 'grigory.yakovlev25@example.com', phone: '+71234567915' },
  { id: 125, name: 'Александра', surname: 'Григорьева', email: 'alexandra.grigorieva26@example.com', phone: '+71234567916' },
  { id: 126, name: 'Василий', surname: 'Романов', email: 'vasiliy.romanov27@example.com', phone: '+71234567917' },
  { id: 127, name: 'Полина', surname: 'Воробьёва', email: 'polina.vorobyeva28@example.com', phone: '+71234567918' },
  { id: 128, name: 'Андрей', surname: 'Сергееев', email: 'andrey.sergeev29@example.com', phone: '+71234567919' },
  { id: 129, name: 'Маргарита', surname: 'Зайцева', email: 'margarita.zayceva30@example.com', phone: '+71234567920' },
];
