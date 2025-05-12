import { OPENROUTER_CONFIG } from '../config/openrouter';

export async function categorizeItem(query) {
  try {
    const response = await fetch(OPENROUTER_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_CONFIG.API_KEY}`,
        'HTTP-Referer': window.location.origin,
      },
      body: JSON.stringify({
        model: OPENROUTER_CONFIG.MODEL,
        messages: [
          {
            role: 'system',
            content: `Siz təkrar emal üzər mütəxəssis olan AI assistentsınız. Verilən əşyanın hansı təkrar emal kateqoriyasına aid olduğunu təyin etməlisiniz.

Kateqoriyalar:
- paper (kağız, karton)
- plastic (plastik)
- metal (metal)
- glass (şüşə)
- organic (qida, bitki)
- electronic (elektron)

Cavabınız yalnız yuxarıdakı kateqoriyalardan biri olmalıdır. Başqa söz və ya izahat yazmayın.`
          },
          {
            role: 'user',
            content: `"${query}" hansı kateqoriyaya aiddir?`
          }
        ]
      })
    });

    const data = await response.json();
    const category = data.choices[0].message.content.trim().toLowerCase();
    
    // Yoxla ki, cavab düzgün kateqoriyalardan biridir
    const validCategories = ['paper', 'plastic', 'metal', 'glass', 'organic', 'electronic'];
    return validCategories.includes(category) ? category : null;
  } catch (error) {
    console.error('OpenRouter API error:', error);
    return null;
  }
}

export async function getAIResponse(query, binType) {
  try {
    const response = await fetch(OPENROUTER_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_CONFIG.API_KEY}`,
        'HTTP-Referer': window.location.origin,
      },
      body: JSON.stringify({
        model: OPENROUTER_CONFIG.MODEL,
        messages: [
          {
            role: 'system',
            content: `Siz təkrar emal üzər mütəxəssis olan AI assistentsınız. Cavablar Azərbaycan dilində olmalıdır.

            Əşyanın ${binType} qutusuna atılmalı olduğunu bilirəm. Zəhmət olmasa:
            1. Bu qərarın səbəbini izah edin
            2. Bu tip tullantıların təkrar emal prosesini təsvir edin
            3. Təkrar emalın ətraf mühitə faydalarını göstərin
            4. Bu tip tullantıların düzgün atılmamasının zərərlərini qeyd edin
            
            Cavabınız qısa və anlaşılan olmalıdır.`
          },
          {
            role: 'user',
            content: `"${query}" tullantısı haqqında məlumat ver`
          }
        ]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenRouter API error:', error);
    return null;
  }
}
