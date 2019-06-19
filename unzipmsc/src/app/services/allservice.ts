// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { InitialList } from '../models/initialList';


// src/app/speech.service.ts
import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

// TypeScript declaration for annyang
declare var annyang: any;


@Injectable({
    providedIn: 'root'
})
export class AllService {


    words$ = new Subject<{ [key: string]: string }>();
    errors$ = new Subject<{ [key: string]: any }>();
    listening = false;
    constructor(private zone: NgZone) { }
    get speechSupported(): boolean {
        return !!annyang;
    }
    init() {
        const commands = {
            'noun :noun': (noun) => {
                this.zone.run(() => {
                    this.words$.next({ type: 'noun', 'word': noun });
                });
            },
            'verb :verb': (verb) => {
                this.zone.run(() => {
                    this.words$.next({ type: 'verb', 'word': verb });
                });
            },
            'adjective :adj': (adj) => {
                this.zone.run(() => {
                    this.words$.next({ type: 'adj', 'word': adj });
                });
            }
        };
        annyang.addCommands(commands);
        // Log anything the user says and what speech recognition thinks it might be
        // annyang.addCallback('result', (userSaid) => {
        //   console.log('User may have said:', userSaid);
        // });
        annyang.addCallback('errorNetwork', (err) => {
            this._handleError('network', 'A network error occurred.', err);
        });
        annyang.addCallback('errorPermissionBlocked', (err) => {
            this._handleError('blocked', 'Browser blocked microphone permissions.', err);
        });
        annyang.addCallback('errorPermissionDenied', (err) => {
            this._handleError('denied', 'User denied microphone permissions.', err);
        });
        annyang.addCallback('resultNoMatch', (userSaid) => {
            this._handleError(
                'no match',
                'Spoken command not recognized. Say "noun [word]", "verb [word]", OR "adjective [word]".',
                { results: userSaid });
        });
    }
    private _handleError(error, msg, errObj) {
        this.zone.run(() => {
            this.errors$.next({
                error: error,
                message: msg,
                obj: errObj
            });
        });
    }
    startListening() {
        annyang.start();
        this.listening = true;
    }
    abort() {
        annyang.abort();
        this.listening = false;
    }


    // apiUrl: string = "/LockersRevamp/";

    // doLogin: string = "lkrDashBoard.htm";

    // getWaitlistInfo: string = "getWaitlistBookingDetail.htm"; // called on after the dashboard loads


    // // function for dynamic sorting
    // compareValues(key, order = 'asc') {
    //     return function (a, b) {
    //         if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    //             // property doesn't exist on either object
    //             return 0;
    //         }

    //         const varA = (typeof a[key] === 'string') ?
    //             a[key].toUpperCase() : a[key];
    //         const varB = (typeof b[key] === 'string') ?
    //             b[key].toUpperCase() : b[key];

    //         let comparison = 0;
    //         if (varA > varB) {
    //             comparison = 1;
    //         } else if (varA < varB) {
    //             comparison = -1;
    //         }
    //         return (
    //             (order == 'desc') ? (comparison * -1) : comparison
    //         );
    //     };
    // }

    // constructor(private http: HttpClient) { }
    // getWaitListInfo() {
    //     return this.http.post(this.apiUrl + this.getWaitlistInfo, null);
    // }
}