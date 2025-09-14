document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('invitationEnvelope');
    const instruction = document.getElementById('clickInstruction');
    const mainContainer = document.getElementById('mainContainer');
    const form = document.getElementById('confirmationForm');
    const modal = document.getElementById('successModal');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Estado inicial - apenas o convite fechado visível
    let isEnvelopeOpened = false;
    
    // Adicionar evento de clique no convite
    envelope.addEventListener('click', function() {
        if (!isEnvelopeOpened) {
            openInvitation();
            isEnvelopeOpened = true;
        }
    });
    
    // Função para abrir o convite com animação espetacular
    function openInvitation() {
        // Som de abertura (opcional - pode ser adicionado depois)
        playOpenSound();
        
        // Animar saída da instrução
        instruction.classList.add('instruction-fade');
        
        // Animar abertura do envelope
        envelope.classList.add('envelope-opening');
        
        // Criar efeito de partículas de abertura
        createOpeningParticles();
        
        // Após 1 segundo, começar a mostrar o conteúdo
        setTimeout(() => {
            // Esconder completamente o envelope e instrução
            envelope.style.display = 'none';
            instruction.style.display = 'none';
            
            // Mostrar o conteúdo principal com animação
            mainContainer.classList.add('show');
            
            // Animar elementos em sequência
            animateContentSequentially();
            
        }, 1500);
        
        // Após 2.5 segundos, adicionar efeitos finais
        setTimeout(() => {
            addFinalEffects();
        }, 2500);
    }
    
    // Criar partículas de abertura
    function createOpeningParticles() {
        const colors = ['#3b82f6', '#fbbf24', '#10b981', '#f59e0b', '#8b5cf6'];
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: 50%;
                    top: 50%;
                    z-index: 1500;
                    border-radius: 50%;
                    animation: particleExplode 2s ease-out forwards;
                    pointer-events: none;
                    box-shadow: 0 0 10px currentColor;
                `;
                
                // Direção aleatória para a explosão
                const angle = (i / particleCount) * 360;
                const distance = 100 + Math.random() * 200;
                
                particle.style.setProperty('--angle', angle + 'deg');
                particle.style.setProperty('--distance', distance + 'px');
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 2000);
            }, i * 30);
        }
    }
    
    // Animar conteúdo sequencialmente
    function animateContentSequentially() {
        const elements = [
            '.logo-container',
            '.main-title', 
            '.subtitle',
            '.event-title',
            '.event-decoration',
            '.detail-item',
            '.form-container'
        ];
        
        elements.forEach((selector, index) => {
            setTimeout(() => {
                const element = document.querySelector(selector);
                if (element) {
                    element.style.animation = `fadeInUp 0.8s ease-out forwards`;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
                
                // Para múltiplos elementos (detail-item)
                if (selector === '.detail-item') {
                    const allElements = document.querySelectorAll(selector);
                    allElements.forEach((el, i) => {
                        setTimeout(() => {
                            el.style.animation = `slideInLeft 0.6s ease-out forwards`;
                            el.style.opacity = '1';
                            el.style.transform = 'translateX(0)';
                        }, i * 200);
                    });
                }
            }, index * 300);
        });
    }
    
    // Adicionar efeitos finais
    function addFinalEffects() {
        // Criar ondas de energia
        createEnergyWaves();
        
        // Adicionar brilho especial aos elementos importantes
        addSpecialGlow();
        
        // Ativar efeitos de hover melhorados
        enhanceHoverEffects();
    }
    
    // Criar ondas de energia
    function createEnergyWaves() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const wave = document.createElement('div');
                wave.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    width: 10px;
                    height: 10px;
                    border: 2px solid rgba(59, 130, 246, 0.6);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: waveExpand 2s ease-out forwards;
                    pointer-events: none;
                    z-index: 100;
                `;
                
                document.body.appendChild(wave);
                
                setTimeout(() => {
                    wave.remove();
                }, 2000);
            }, i * 500);
        }
    }
    
    // Adicionar brilho especial
    function addSpecialGlow() {
        const logo = document.querySelector('.logo');
        const title = document.querySelector('.main-title');
        const eventTitle = document.querySelector('.event-title');
        
        if (logo) {
            logo.style.animation = 'logoGlow 3s ease-in-out infinite, logoSpecialGlow 1s ease-out';
        }
        
        if (title) {
            title.style.animation = 'titleSpecialGlow 2s ease-out';
        }
        
        if (eventTitle) {
            eventTitle.style.animation = 'titlePulse 2s ease-in-out infinite, eventSpecialGlow 1.5s ease-out';
        }
    }
    
    // Melhorar efeitos de hover
    function enhanceHoverEffects() {
        const detailItems = document.querySelectorAll('.detail-item');
        detailItems.forEach((item, index) => {
            item.addEventListener('mouseenter', function() {
                this.style.animation = `detailHover 0.6s ease-out`;
                this.style.transform = 'translateX(15px) scale(1.02)';
                this.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.4)';
                
                // Efeito de ondulação
                createRippleEffect(this, event);
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Som de abertura (placeholder)
    function playOpenSound() {
        // Aqui poderia ser adicionado um som de abertura
        const audio = new Audio('https://www.epidemicsound.com/sound-effects/tracks/d6ae1ed7-0930-4bcc-b4d0-f7930e5cb54a/');
        audio.play();
        console.log('🎵 Som de abertura do convite!');
    }
    
    // Manipular envio do formulário (código existente melhorado)
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
    }
    
    // Adicionar efeitos de digitação no input
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 25px rgba(59, 130, 246, 0.4)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
            }, 150);
        });
    }
    
    // Adicionar efeitos aos radio buttons
    const radioOptions = document.querySelectorAll('.radio-option');
    radioOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Animação de seleção melhorada
            this.style.transform = 'scale(1.05)';
            this.style.background = 'rgba(59, 130, 246, 0.15)';
            this.style.boxShadow = '0 5px 20px rgba(59, 130, 246, 0.3)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
                this.style.boxShadow = '';
            }, 300);
            
            // Efeito de ondulação melhorado
            createRippleEffect(this, event);
        });
    });
    
    // Função para lidar com envio do formulário
    function handleFormSubmission() {
        const nameInput = document.getElementById('name');
        const attendanceRadio = document.querySelector('input[name="attendance"]:checked');
        
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Por favor, digite seu nome');
            return;
        }
        
        if (!attendanceRadio) {
            showError(document.querySelector('.radio-group'), 'Por favor, selecione uma opção');
            return;
        }
        
        // Animação de carregamento no botão
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Confirmando...';
        submitBtn.disabled = true;
        submitBtn.style.background = 'linear-gradient(135deg, #6b7280, #4b5563)';
        
        // Simular processamento
        setTimeout(() => {
            showSuccessModal(nameInput.value.trim(), attendanceRadio.value);
            
            // Resetar botão
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'linear-gradient(135deg, #3b82f6, #1e40af)';
            
            // Resetar formulário
            form.reset();
            
            // Adicionar confetes se confirmou presença
            if (attendanceRadio.value === 'Aceito') {
                createConfetti();
                createFireworks();
            }
        }, 2000);
    }
    
    // Mostrar erro
    function showError(element, message) {
        const existingError = element.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.9rem;
            margin-top: 5px;
            animation: shake 0.5s ease-in-out;
        `;
        
        element.parentNode.appendChild(errorDiv);
        
        if (element.tagName === 'INPUT') {
            element.style.borderColor = '#ef4444';
            element.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.3)';
            
            setTimeout(() => {
                element.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                element.style.boxShadow = '';
            }, 3000);
        }
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
    
    // Mostrar modal de sucesso
    function showSuccessModal(name, attendance) {
        const message = document.getElementById('confirmationMessage');
        
        if (attendance === 'Aceito') {
            message.innerHTML = `
                <strong>${name}</strong>, sua presença foi confirmada! 🎉<br><br>
                Nos vemos no dia <strong>20 de setembro às 19h</strong><br>
                na Igreja Elohim!<br><br>
                <em>Que Deus abençoe! 🙏</em>
            `;
        } else {
            message.innerHTML = `
                <strong>${name}</strong>, obrigado por nos informar! 😊<br><br>
                Sentiremos sua falta, mas esperamos vê-lo(a)<br>
                em uma próxima oportunidade!<br><br>
                <em>Que Deus abençoe! 🙏</em>
            `;
        }
        
        modal.classList.add('show');
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animation = 'modalBounce 0.6s ease-out';
    }
    
    // Fechar modal
    window.closeModal = function() {
        modal.classList.remove('show');
    }
    
    // Criar efeito de ondulação
    function createRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(59, 130, 246, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.8s ease-out;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 800);
    }
    
    // Criar confetes
    function createConfetti() {
        const colors = ['#3b82f6', '#fbbf24', '#10b981', '#f59e0b', '#8b5cf6'];
        const confettiCount = 120;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 12px;
                    height: 12px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}vw;
                    top: -10px;
                    z-index: 1000;
                    border-radius: 50%;
                    animation: confettiFall 4s ease-out forwards;
                    pointer-events: none;
                    box-shadow: 0 0 10px currentColor;
                `;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 10000);
            }, i * 100);
        }
    }
    
    // Criar fogos de artifício
    function createFireworks() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.style.cssText = `
                    position: fixed;
                    left: ${20 + Math.random() * 60}%;
                    top: ${20 + Math.random() * 40}%;
                    width: 4px;
                    height: 4px;
                    background: #fbbf24;
                    border-radius: 50%;
                    animation: fireworkExplode 1.5s ease-out forwards;
                    pointer-events: none;
                    z-index: 1000;
                `;
                
                document.body.appendChild(firework);
                
                // Criar partículas da explosão
                setTimeout(() => {
                    for (let j = 0; j < 12; j++) {
                        const particle = document.createElement('div');
                        const angle = (j / 12) * 360;
                        particle.style.cssText = `
                            position: fixed;
                            left: ${firework.offsetLeft}px;
                            top: ${firework.offsetTop}px;
                            width: 3px;
                            height: 3px;
                            background: ${['#3b82f6', '#fbbf24', '#10b981'][Math.floor(Math.random() * 3)]};
                            border-radius: 50%;
                            animation: fireworkParticle 1s ease-out forwards;
                            pointer-events: none;
                            z-index: 1000;
                            transform-origin: center;
                            transform: rotate(${angle}deg);
                        `;
                        
                        document.body.appendChild(particle);
                        
                        setTimeout(() => {
                            particle.remove();
                        }, 1000);
                    }
                    
                    firework.remove();
                }, 200);
            }, i * 300);
        }
    }
});

// Adicionar estilos CSS dinamicamente para as novas animações
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes particleExplode {
        0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translate(var(--distance), 0) scale(0) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes waveExpand {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    
    @keyframes logoSpecialGlow {
        0% { filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.5)); }
        50% { filter: drop-shadow(0 0 60px rgba(251, 191, 36, 0.8)); }
        100% { filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.5)); }
    }
    
    @keyframes titleSpecialGlow {
        0% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { text-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
        100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    }
    
    @keyframes eventSpecialGlow {
        0% { text-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
        50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        100% { text-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
    }
    
    @keyframes detailHover {
        0% { transform: translateX(0) scale(1); }
        50% { transform: translateX(10px) scale(1.05); }
        100% { transform: translateX(15px) scale(1.02); }
    }
    
    @keyframes fireworkExplode {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(3);
        }
    }
    
    @keyframes fireworkParticle {
        0% {
            opacity: 1;
            transform: rotate(var(--angle, 0deg)) translateY(0);
        }
        100% {
            opacity: 0;
            transform: rotate(var(--angle, 0deg)) translateY(-50px);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

document.head.appendChild(additionalStyles);

// Adicionar efeito de paralaxe suave
