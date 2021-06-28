import { HTMLAttributes } from 'react';
import { UserInfoStyle } from './styles';

interface UserInfoProps extends HTMLAttributes<HTMLDivElement> {
    author: {
        name: string;
        avatar: string;
    };
}

export const UserInfo: React.FC<UserInfoProps> = ({ author, ...props }) => {
    return (
        <UserInfoStyle {...props}>
            <img src={author.avatar} alt={author.name} />
            <span>{author.name}</span>
        </UserInfoStyle>
    );
};
