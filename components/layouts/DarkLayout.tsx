import {FC} from 'react';

type Props = {
  children: React.ReactNode;
};

export const DarkLayout: FC<Props> = ({children}) => {
  return (
    <div
        style={{
            backgroundColor: 'rgb(0, 0, 0, 0.3)',
            borderRadius: '0.5rem',
            padding: '1rem',
        }}

    >
    <h3>DarkLayout</h3>
    <div>
        {children}
    </div>
    </div>
  )
}
