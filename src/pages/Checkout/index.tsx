import React, { useState } from 'react'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import Button from '../../components/Button'
import boleto from '../../assets/images/boleto.png'
import card from '../../assets/images/credit-card.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="email" type="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmdeliveryEmail">Confirme o E-mail</label>
              <input id="email" type="confirmdeliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            type="button"
            title="Cartão de crédito"
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            type="button"
            title="Cartão de crédito"
            onClick={() => setPayWithCard(true)}
          >
            <img src={card} alt="Boleto" />
            Cartão e crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="carOwner">Nome do titular do cartão</label>
                    <input id="text" type="carOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="carOwner">CPF do titular do cartão</label>
                    <input id="carOwner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input id="cardDisplayName" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="number" />
                  </InputGroup>
                  <InputGroup maxWidth="125px">
                    <label htmlFor="expiresMonth">Mês De Vencimento</label>
                    <input id="expiresMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expireYear">Ano De Vencimento</label>
                    <input id="expireYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="number" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1 x de R$ 200,00</option>
                      <option>1 x de R$ 200,00</option>
                      <option>1 x de R$ 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <>
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              </>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Cliquer aqui para finalizar a compra">
        Finalizar a compra
      </Button>
    </div>
  )
}

export default Checkout
