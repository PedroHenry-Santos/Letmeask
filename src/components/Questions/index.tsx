import { HTMLMotionProps, motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { QuestionStyle } from './styles';

type QuestionsProps = HTMLMotionProps<'div'> &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        content: string;
        author: {
            name: string;
            avatar: string;
        };
        children?: ReactNode;
        isAnswered?: boolean;
        isHighLighted?: boolean;
    };

export const Questions: React.FC<QuestionsProps> = ({
    content,
    author,
    isAnswered = false,
    isHighLighted = false,
    children
}) => {
    return (
        <QuestionStyle
            as={motion.div}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
                show: { opacity: 1, y: '0' },
                hidden: { opacity: 0, y: '50%' }
            }}
            initial="hidden"
            animate="show"
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
        </QuestionStyle>
    );
};
