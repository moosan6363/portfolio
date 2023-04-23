import React from 'react';
import './portfolio.css';
import { Footer } from './footer';

export const Portfolio = () =>  {
    return (
        <div className="container">
            <main className="main">
                <h1 className="title">
                    moosan's portfolio
                </h1>

                <p className="description">
                    ただいまサイト作成中です。更新をしばらくお待ちください。
                </p>

                <p className="description">
                    簡単に私のいままでの活動をご紹介します。
                </p>

                <div className="grid">
                    <a href="https://rur.mech.tuat.ac.jp/~rur" className="card">
                        <h2>東京農工大学ロボット研究会R.U.R</h2>
                        <p>NHK学生ロボコン2022制御リーダー</p>
                        <p>ROSとLIDARを用いた自動照準の作成やR1、R2の制御全体を行いました。</p>
                    </a>

                    <a href="https://github.com/moosan6363/TimeTreebot" className="card">
                        <h2>LinebotとTimetreeの連携アプリ</h2>
                        <p>HerokuのDynosを用いたTimeTreeスケジュール更新を通知するLineBotを作成しました。</p>
                    </a>

                    <a href="https://www.youtube.com/watch?v=GxQMJvz_xqQ&t=1677s" className="card">
                        <h2>Open Hack U 2021 vol.4に出場</h2>
                        <p>友人とハッカソンに出場し、discordのボイスチャットを使用した議事録botを作成していました。</p>
                        <p>主にバックエンド側を担当しました。</p>
                    </a>
                </div>
            </main>

            <Footer/>
        </div>
    );
};