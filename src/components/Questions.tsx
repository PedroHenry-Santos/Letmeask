import { ReactNode } from 'react';

import '../styles/questions.scss';

interface QuestionsProps {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighLighted?: boolean;
}

export const Questions: React.FC<QuestionsProps> = ({
    content,
    author,
    isAnswered = false,
    isHighLighted = false,
    children
}) => {
    return (
        <div
            className={`question ${isAnswered ? 'answered' : ''} ${
                isHighLighted && !isAnswered ? 'highlighted' : ''
            } `}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>
    );
};
