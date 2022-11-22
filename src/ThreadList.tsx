import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ThreadModule from './ThreadList.module.css';

type thread = {
    id: string,
    title: string,
}

export const ThreadList = () => {
    const baseUrl = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/';
    const [threadList, setThreadList] = useState<thread[]>([]);
    useEffect(() => {
        fetch(baseUrl + 'threads')
            .then(response => response.json())
            .then(data => setThreadList(data));
    }, []);
    return (
        <table className={ThreadModule['threadList--table']}>
            <thead>
                <tr><th>新着スレッド</th></tr>
            </thead>
            <tbody>
                {threadList.map(thread => <tr key={thread.id}><td className={ThreadModule['threadList--td']}>{thread.title}</td></tr>)}
            </tbody>
        </table>
    );
}