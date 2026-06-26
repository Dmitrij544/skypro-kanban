import { Link } from 'react-router-dom'; 
import * as S from './Card.styled';

function Card({ id, title, category, categoryClass, date, $isDone }) {
  return (
    <S.CardsItem>
      <Link 
        to={`/task/${id}`} 
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <S.CardContainer>
          <S.CardGroup>
            <S.CardTheme $categoryClass={categoryClass}>
              <p>{category}</p>
            </S.CardTheme>
            <S.CardBtn type="button">
              <div /><div /><div />
            </S.CardBtn>
          </S.CardGroup>
          
          <S.CardContent>
            <S.CardTitle $isDone={$isDone}>{title}</S.CardTitle>
            
            <S.CardDate>
              <svg xmlns="http://w3.org" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>{date}</p>
            </S.CardDate>
          </S.CardContent>
        </S.CardContainer>
      </Link>
    </S.CardsItem>
  );
}

export default Card;