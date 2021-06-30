import { HTMLAttributes } from 'react';
import MediaQuery from 'react-responsive';

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
            <MediaQuery minWidth="320px">
                <span>{author.name}</span>
            </MediaQuery>
        </UserInfoStyle>
    );
};
