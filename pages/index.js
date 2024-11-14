import Link from 'next/link'
import React from 'react';

function Title({ children, as }) {
    const Tag = as;
    return (
        <>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `}</style>
        </>
    );
}

export default function HomePage() {
    return (
        <div>
            <Title as="h2">Alura Cases - Home</Title>
            <Link href="/faq">
                Ir para a página do FAQ
            </Link>
        </div>
    )
}