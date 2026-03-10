// ========== SISTEMA DE AUTENTICAÇÃO CORRIGIDO ========== //

let currentUser = null;
let logoutTimer = null;

// EXPORTA currentUser GLOBALMENTE
window.currentUser = null;

// Configurar timer de logout (30 minutos)
function iniciarLogoutTimer() {
    if (logoutTimer) clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
        if (currentUser) {
            fazerLogout();
            Swal.fire({
                icon: 'info',
                title: 'Sessão expirada',
                text: 'Você foi desconectado por inatividade.',
                confirmButtonColor: '#0066cc'
            });
        }
    }, 30 * 60 * 1000);
}

// Inicialização
window.addEventListener('load', function() {
    setTimeout(criarMenuUsuario, 1000);
    restaurarInfoCapa();
    
    if (window.auth?.currentUser) {
        currentUser = window.auth.currentUser;
        window.currentUser = currentUser; // SINCRONIZA
        carregarDadosUsuario(currentUser.uid);
        atualizarInterfaceUsuario(currentUser);
        iniciarLogoutTimer();
    }
});

function restaurarInfoCapa() {
    const infoCapa = document.getElementById('informacoes');
    if (infoCapa) {
        infoCapa.innerHTML = `
            <p><i class="fas fa-clock"></i> Horário de Funcionamento: 09:00 - 18:00</p>
            <p><i class="fas fa-motorcycle"></i> Entrega Rápida, atendimento de qualidade!</p>
        `;
    }
}

function verificarGalaoCompleto() {
    if (typeof cart === 'undefined' || !cart) return false;
    return cart.some(item => 
        item.categoria === 'Galão Completo' || 
        (item.nome && item.nome.toLowerCase().includes('galão completo'))
    );
}

function recomendarGalaoCompleto() {
    Swal.fire({
        icon: 'info',
        title: 'Galão Completo Necessário',
        html: `
            <div style="text-align: center;">
                <p style="margin-bottom: 15px;">Você informou que não tem galão. Para continuar, você precisa adicionar um <strong>Galão Completo</strong> ao carrinho.</p>
                <p style="margin-bottom: 20px; color: #0066cc;">O valor do Galão Completo é diferente do refil!</p>
                <button onclick="irParaGalaoCompleto()" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-bottle-water"></i> Ver Galões Completos
                </button>
            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true
    });
}

function irParaGalaoCompleto() {
    Swal.close();
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    
    if (typeof window.filterProducts === 'function') {
        window.filterProducts('Galão Completo');
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Galões Completos',
                text: 'Selecione o galão completo desejado',
                timer: 2000,
                showConfirmButton: false
            });
        }, 500);
    }
}

// ===== FUNÇÃO PARA ABRIR MENU MOBILE ===== //
function abrirMenuMobile() {
    // Remover menu antigo se existir
    const menuAntigo = document.getElementById('userMenuMobile');
    if (menuAntigo) menuAntigo.remove();
    
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'user-menu-mobile';
    overlay.id = 'userMenuMobile';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 999999;
        display: flex;
        justify-content: flex-end;
    `;
    
    // Criar conteúdo do menu
    const content = document.createElement('div');
    content.className = 'user-menu-content';
    content.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        max-width: 300px;
        height: 100%;
        background: white;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
        z-index: 1000000;
        overflow-y: auto;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Obter email do usuário
    const userEmail = currentUser ? currentUser.email : 'Usuário';
    const userName = userEmail.split('@')[0];
    
    content.innerHTML = `
        <div style="padding: 20px; background: #0066cc; color: white;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0;">Olá, ${userName}!</h3>
                <button onclick="fecharMenuMobile()" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">×</button>
            </div>
            <p style="margin: 0; font-size: 12px; opacity: 0.8;">${userEmail}</p>
        </div>
        
        <div style="padding: 15px;">
            <a href="#" onclick="mostrarHistorico(); fecharMenuMobile(); return false;" style="display: flex; align-items: center; gap: 15px; padding: 15px; color: #333; text-decoration: none; border-bottom: 1px solid #eee;">
                <i class="fas fa-history" style="width: 24px; color: #0066cc;"></i>
                <span>Histórico de Pedidos</span>
            </a>
            
            <a href="#" onclick="mostrarDados(); fecharMenuMobile(); return false;" style="display: flex; align-items: center; gap: 15px; padding: 15px; color: #333; text-decoration: none; border-bottom: 1px solid #eee;">
                <i class="fas fa-edit" style="width: 24px; color: #0066cc;"></i>
                <span>Meus Dados</span>
            </a>
            
            <a href="#" onclick="mostrarEnderecos(); fecharMenuMobile(); return false;" style="display: flex; align-items: center; gap: 15px; padding: 15px; color: #333; text-decoration: none; border-bottom: 1px solid #eee;">
                <i class="fas fa-map-marker-alt" style="width: 24px; color: #0066cc;"></i>
                <span>Endereços</span>
            </a>
            
            <a href="#" onclick="mostrarAlterarSenha(); fecharMenuMobile(); return false;" style="display: flex; align-items: center; gap: 15px; padding: 15px; color: #333; text-decoration: none; border-bottom: 1px solid #eee;">
                <i class="fas fa-key" style="width: 24px; color: #0066cc;"></i>
                <span>Alterar Senha</span>
            </a>
            
            <a href="#" onclick="confirmarExclusaoConta(); fecharMenuMobile(); return false;" style="display: flex; align-items: center; gap: 15px; padding: 15px; color: #dc3545; text-decoration: none; border-bottom: 1px solid #eee;">
                <i class="fas fa-trash-alt" style="width: 24px;"></i>
                <span>Excluir Conta</span>
            </a>
            
            <a href="#" onclick="fazerLogout(); fecharMenuMobile(); return false;" style="display: flex; align-items: center; gap: 15px; padding: 15px; color: #333; text-decoration: none;">
                <i class="fas fa-sign-out-alt" style="width: 24px; color: #dc3545;"></i>
                <span>Sair</span>
            </a>
        </div>
    `;
    
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    
    // Fechar ao clicar no overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            fecharMenuMobile();
        }
    });
}

function fecharMenuMobile() {
    const menu = document.getElementById('userMenuMobile');
    if (menu) menu.remove();
}

// Modificar a função criarMenuUsuario para incluir suporte mobile
function criarMenuUsuario() {
    if (document.getElementById('userMenuContainer')) return;
    
    const categorias = document.querySelector('.categorias');
    if (!categorias) return;
    
    const userContainer = document.createElement('div');
    userContainer.id = 'userMenuContainer';
    userContainer.style.cssText = 'position: relative; margin-right: 5px; display: inline-block;';
    
    const userBtn = document.createElement('button');
    userBtn.id = 'userBtn';
    userBtn.className = 'categoria-button';
    userBtn.style.cssText = 'background: #0066cc; display: none; width: 40px; height: 40px; border-radius: 50%;';
    userBtn.innerHTML = '<i class="fas fa-user-check"></i>';
    
    const userDropdown = document.createElement('div');
    userDropdown.id = 'userDropdown';
    userDropdown.style.cssText = `
        position: absolute; top: 45px; right: 0; background: white; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); width: 220px; z-index: 10000; display: none;
    `;
    userDropdown.innerHTML = `
        <div style="padding: 12px; border-bottom: 1px solid #eee; background: #f5f5f5;">
            <strong id="dropdownUserEmail">Carregando...</strong>
        </div>
        <a href="#" onclick="mostrarHistorico(); return false;" style="display: block; padding: 10px 15px; color: #333; border-bottom: 1px solid #eee; text-decoration: none;">
            <i class="fas fa-history" style="width: 20px; color: #0066cc;"></i> Histórico
        </a>
        <a href="#" onclick="mostrarDados(); return false;" style="display: block; padding: 10px 15px; color: #333; border-bottom: 1px solid #eee; text-decoration: none;">
            <i class="fas fa-edit" style="width: 20px; color: #0066cc;"></i> Meus Dados
        </a>
        <a href="#" onclick="mostrarEnderecos(); return false;" style="display: block; padding: 10px 15px; color: #333; border-bottom: 1px solid #eee; text-decoration: none;">
            <i class="fas fa-map-marker-alt" style="width: 20px; color: #0066cc;"></i> Endereços
        </a>
        <a href="#" onclick="mostrarAlterarSenha(); return false;" style="display: block; padding: 10px 15px; color: #333; border-bottom: 1px solid #eee; text-decoration: none;">
            <i class="fas fa-key" style="width: 20px; color: #0066cc;"></i> Alterar Senha
        </a>
        <a href="#" onclick="confirmarExclusaoConta(); return false;" style="display: block; padding: 10px 15px; color: #dc3545; border-bottom: 1px solid #eee; text-decoration: none;">
            <i class="fas fa-trash-alt" style="width: 20px;"></i> Excluir Conta
        </a>
        <a href="#" onclick="fazerLogout(); return false;" style="display: block; padding: 10px 15px; color: #333; text-decoration: none;">
            <i class="fas fa-sign-out-alt" style="width: 20px; color: #dc3545;"></i> Sair
        </a>
    `;
    
    const loginBtn = document.createElement('button');
    loginBtn.id = 'loginBtn';
    loginBtn.className = 'categoria-button';
    loginBtn.style.cssText = 'background: #28a745; width: 40px; height: 40px; border-radius: 50%; margin-right: 5px;';
    loginBtn.innerHTML = '<i class="fas fa-user"></i>';
    loginBtn.onclick = mostrarModalLogin;
    
    userContainer.appendChild(userBtn);
    userContainer.appendChild(userDropdown);
    
    const homeBtn = document.querySelector('.categoria-button[title="Início"]');
    if (homeBtn) {
        categorias.insertBefore(loginBtn, homeBtn);
        categorias.insertBefore(userContainer, homeBtn);
    }
    
    document.addEventListener('click', (e) => {
        if (!userContainer.contains(e.target)) {
            userDropdown.style.display = 'none';
        }
    });
    
    // Modificar o evento de clique para suportar mobile
    userBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (window.innerWidth <= 768) {
            abrirMenuMobile();
        } else {
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
}

// Função para mostrar opções de endereço no checkout
async function mostrarOpcoesEndereco() {
    if (!currentUser) return null;
    
    try {
        const docRef = window.doc(window.db, 'clientes', currentUser.uid);
        const docSnap = await window.getDoc(docRef);
        
        if (!docSnap.exists()) return null;
        
        const dados = docSnap.data();
        const enderecos = dados.enderecos || [];
        const enderecoSelecionado = dados.enderecoSelecionado || 0;
        
        if (enderecos.length === 0) return null;
        if (enderecos.length === 1) return enderecos[0];
        
        let enderecoOptions = '';
        enderecos.forEach((end, i) => {
            enderecoOptions += `
                <div class="endereco-option" data-index="${i}" style="border: 2px solid ${i === enderecoSelecionado ? '#0066cc' : '#e0e0e0'}; border-radius: 10px; padding: 15px; margin-bottom: 10px; cursor: pointer;" onclick="selecionarEnderecoCheckout(${i})" id="endereco-checkout-${i}">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="background: ${i === enderecoSelecionado ? '#0066cc' : '#e0e0e0'}; color: ${i === enderecoSelecionado ? 'white' : '#666'}; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${i+1}</span>
                        <strong>${i === enderecoSelecionado ? 'Endereço Principal' : `Endereço ${i+1}`}</strong>
                    </div>
                    <p style="margin: 10px 0 0 34px;">${end}</p>
                </div>
            `;
        });
        
        const { value: enderecoEscolhido } = await Swal.fire({
            title: 'Escolha o endereço de entrega',
            html: `<div style="max-height: 400px; overflow-y: auto; padding-right: 5px;">${enderecoOptions}</div>`,
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            },
            preConfirm: () => {
                const index = window.enderecoSelecionadoCheckout !== undefined ? 
                    window.enderecoSelecionadoCheckout : enderecoSelecionado;
                window.enderecoSelecionadoCheckout = undefined;
                return enderecos[index];
            }
        });
        
        return enderecoEscolhido || enderecos[enderecoSelecionado];
        
    } catch (error) {
        console.error('Erro ao mostrar opções de endereço:', error);
        return null;
    }
}

window.enderecoSelecionadoCheckout = undefined;
window.selecionarEnderecoCheckout = function(index) {
    window.enderecoSelecionadoCheckout = index;
    
    document.querySelectorAll('.endereco-option').forEach(el => {
        el.style.borderColor = '#e0e0e0';
    });
    
    const el = document.getElementById(`endereco-checkout-${index}`);
    if (el) {
        el.style.borderColor = '#0066cc';
    }
};

// Função para toggle do campo de validade do galão
function toggleGalaoValidity() {
    const galaoValidityGroup = document.getElementById('galaoValidityGroup');
    const naoTenhoGalao = document.getElementById('naoTenhoGalao');
    const firstTimeSim = document.getElementById('firstTimeSim');
    
    if (!firstTimeSim) return;
    
    if (firstTimeSim.checked) {
        // Criar opção "Não tenho galão" se não existir
        if (!document.getElementById('naoTenhoGalao')) {
            const radioGroup = document.querySelector('.radio-group');
            if (radioGroup) {
                const naoTenhoDiv = document.createElement('div');
                naoTenhoDiv.className = 'radio-option';
                naoTenhoDiv.style.width = '100%';
                naoTenhoDiv.innerHTML = `
                    <input type="radio" id="naoTenhoGalao" name="temGalao" value="nao" onchange="toggleGalaoFields()">
                    <label for="naoTenhoGalao" style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <i class="fas fa-times-circle" style="color: #dc3545;"></i> Não tenho galão
                    </label>
                `;
                radioGroup.appendChild(naoTenhoDiv);
            }
        }
        
        if (naoTenhoGalao && naoTenhoGalao.checked) {
            galaoValidityGroup.style.display = 'none';
        } else {
            galaoValidityGroup.style.display = 'block';
        }
    } else {
        galaoValidityGroup.style.display = 'none';
        const naoTenhoDiv = document.getElementById('naoTenhoGalao')?.parentNode;
        if (naoTenhoDiv) naoTenhoDiv.remove();
    }
}

function toggleGalaoFields() {
    const galaoValidityGroup = document.getElementById('galaoValidityGroup');
    const naoTenhoGalao = document.getElementById('naoTenhoGalao');
    
    if (naoTenhoGalao && naoTenhoGalao.checked) {
        galaoValidityGroup.style.display = 'none';
        setTimeout(() => {
            if (!verificarGalaoCompleto()) {
                recomendarGalaoCompleto();
            }
        }, 500);
    } else {
        galaoValidityGroup.style.display = 'block';
    }
}

// Função para mostrar modal de login
function mostrarModalLogin() {
    const modalExistente = document.getElementById('loginModal');
    if (modalExistente) modalExistente.remove();
    
    const modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: flex; justify-content: center;
        align-items: center; z-index: 9999999;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px; max-width: 400px; width: 90%; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            <button onclick="this.closest('#loginModal').remove()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">×</button>
            
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="images/logomj.png" alt="MJ Águas" style="max-width: 120px; margin-bottom: 15px;">
                <h2 style="color: #0066cc; margin: 0;">Bem-vindo(a)!</h2>
                <p style="color: #666; margin-top: 5px;">Faça login ou crie sua conta</p>
            </div>
            
            <div style="display: flex; gap: 10px; margin-bottom: 20px; background: #f0f0f0; border-radius: 10px; padding: 5px;">
                <button id="tabLoginBtn" onclick="mudarAba('login')" style="flex: 1; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Login</button>
                <button id="tabRegistroBtn" onclick="mudarAba('registro')" style="flex: 1; padding: 12px; background: transparent; color: #666; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Cadastro</button>
            </div>
            
            <div id="aba-login">
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">E-mail</label>
                    <input type="email" id="loginEmail" placeholder="seu@email.com" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Senha</label>
                    <input type="password" id="loginSenha" placeholder="••••••••" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <button onclick="fazerLogin()" style="width: 100%; padding: 14px; background: #0066cc; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">Entrar</button>
                <div style="text-align: center; margin-top: 15px;">
                    <a href="#" onclick="mostrarRecuperarSenha(); return false;" style="color: #0066cc; text-decoration: none; font-size: 14px;">Esqueci minha senha</a>
                </div>
            </div>
            
            <div id="aba-registro" style="display: none;">
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Nome Completo</label>
                    <input type="text" id="regNome" placeholder="Seu nome" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">E-mail</label>
                    <input type="email" id="regEmail" placeholder="seu@email.com" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Telefone</label>
                    <input type="tel" id="regTelefone" placeholder="(11) 99999-9999" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Senha</label>
                    <input type="password" id="regSenha" placeholder="Mínimo 6 caracteres" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Confirmar Senha</label>
                    <input type="password" id="regSenhaConfirm" placeholder="Digite novamente" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>
                <button onclick="registrarUsuario()" style="width: 100%; padding: 14px; background: #28a745; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">Criar Conta</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function mudarAba(aba) {
    const tabLogin = document.getElementById('tabLoginBtn');
    const tabRegistro = document.getElementById('tabRegistroBtn');
    const abaLogin = document.getElementById('aba-login');
    const abaRegistro = document.getElementById('aba-registro');
    
    if (aba === 'login') {
        tabLogin.style.background = '#0066cc';
        tabLogin.style.color = 'white';
        tabRegistro.style.background = 'transparent';
        tabRegistro.style.color = '#666';
        abaLogin.style.display = 'block';
        abaRegistro.style.display = 'none';
    } else {
        tabRegistro.style.background = '#28a745';
        tabRegistro.style.color = 'white';
        tabLogin.style.background = 'transparent';
        tabLogin.style.color = '#666';
        abaLogin.style.display = 'none';
        abaRegistro.style.display = 'block';
    }
}

function mostrarRecuperarSenha() {
    document.getElementById('loginModal')?.remove();
    
    const modal = document.createElement('div');
    modal.id = 'recuperarModal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: flex; justify-content: center;
        align-items: center; z-index: 10000000;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px; max-width: 400px; width: 90%; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            <button onclick="this.closest('#recuperarModal').remove()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">×</button>
            <h2 style="color: #0066cc; margin-bottom: 20px;">Recuperar Senha</h2>
            <p style="color: #666; margin-bottom: 20px;">Digite seu e-mail para receber o link de recuperação.</p>
            <input type="email" id="recuperarEmail" placeholder="seu@email.com" style="width: 100%; padding: 12px; margin-bottom: 20px; border: 2px solid #e0e0e0; border-radius: 8px; box-sizing: border-box;">
            <button onclick="enviarRecuperacao()" style="width: 100%; padding: 14px; background: #0066cc; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Enviar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function enviarRecuperacao() {
    const email = document.getElementById('recuperarEmail')?.value;
    if (!email) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Digite seu e-mail',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    window.sendPasswordResetEmail(window.auth, email)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'E-mail enviado!',
                text: 'Verifique sua caixa de entrada',
                confirmButtonColor: '#0066cc',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
            document.getElementById('recuperarModal')?.remove();
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'E-mail não encontrado',
                confirmButtonColor: '#0066cc',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
        });
}

function fazerLogin() {
    const email = document.getElementById('loginEmail')?.value;
    const senha = document.getElementById('loginSenha')?.value;
    
    if (!email || !senha) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Preencha todos os campos',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    window.signInWithEmailAndPassword(window.auth, email, senha)
        .then(async (userCredential) => {
            currentUser = userCredential.user;
            window.currentUser = currentUser; // SINCRONIZAÇÃO CRÍTICA
            
            await Swal.fire({
                icon: 'success',
                title: 'Login realizado!',
                text: 'Bem-vindo(a) de volta!',
                timer: 2000,
                showConfirmButton: false,
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
            
            document.getElementById('loginModal')?.remove();
            atualizarInterfaceUsuario(currentUser);
            iniciarLogoutTimer();
            
            await carregarDadosUsuario(currentUser.uid);
            
            if (document.getElementById('checkoutPage').style.display === 'block') {
                continuarCheckoutConvidado();
            }
        })
        .catch((error) => {
            let msg = 'Erro no login';
            if (error.code === 'auth/user-not-found') {
                msg = 'Nenhuma conta encontrada com este e-mail';
            } else if (error.code === 'auth/wrong-password') {
                msg = 'Senha incorreta';
            }
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: msg,
                confirmButtonColor: '#0066cc',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
        });
}

function registrarUsuario() {
    const nome = document.getElementById('regNome')?.value;
    const email = document.getElementById('regEmail')?.value;
    const telefone = document.getElementById('regTelefone')?.value;
    const senha = document.getElementById('regSenha')?.value;
    const senhaConfirm = document.getElementById('regSenhaConfirm')?.value;
    
    if (!nome || !email || !telefone || !senha) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Preencha todos os campos',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    if (senha !== senhaConfirm) {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'As senhas não coincidem',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    if (senha.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'A senha deve ter pelo menos 6 caracteres',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    window.createUserWithEmailAndPassword(window.auth, email, senha)
        .then(async (userCredential) => {
            const user = userCredential.user;
            currentUser = user;
            window.currentUser = user; // SINCRONIZAÇÃO CRÍTICA
            
            await window.setDoc(window.doc(window.db, 'clientes', user.uid), {
                nome: nome,
                email: email,
                telefone: telefone,
                enderecos: [],
                enderecoSelecionado: 0,
                dataCriacao: new Date().toISOString()
            });
            
            await Swal.fire({
                icon: 'success',
                title: 'Conta criada!',
                text: 'Bem-vindo(a) à MJ Águas!',
                timer: 2000,
                showConfirmButton: false,
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
            
            document.getElementById('loginModal')?.remove();
            
            document.getElementById('checkoutName').value = nome;
            document.getElementById('checkoutPhone').value = telefone;
            
            atualizarInterfaceUsuario(user);
            iniciarLogoutTimer();
            
            if (document.getElementById('checkoutPage').style.display === 'block') {
                continuarCheckoutConvidado();
            }
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire({
                    icon: 'error',
                    title: 'E-mail já cadastrado',
                    text: 'Este e-mail já possui uma conta. Faça login.',
                    confirmButtonColor: '#0066cc',
                    didOpen: () => {
                        document.querySelector('.swal2-container').style.zIndex = '9999999';
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Erro ao criar conta',
                    confirmButtonColor: '#0066cc',
                    didOpen: () => {
                        document.querySelector('.swal2-container').style.zIndex = '9999999';
                    }
                });
            }
        });
}

function fazerLogout() {
    window.signOut(window.auth)
        .then(() => {
            currentUser = null;
            window.currentUser = null; // SINCRONIZAÇÃO CRÍTICA
            if (logoutTimer) clearTimeout(logoutTimer);
            
            Swal.fire({
                icon: 'success',
                title: 'Logout realizado',
                text: 'Volte sempre!',
                timer: 2000,
                showConfirmButton: false,
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
            
            atualizarInterfaceUsuario(null);
            
            document.getElementById('header').style.display = 'block';
            document.getElementById('inicio').style.display = 'none';
            document.getElementById('cartPage').style.display = 'none';
            document.getElementById('checkoutPage').style.display = 'none';
            
            restaurarInfoCapa();
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Erro ao fazer logout',
                confirmButtonColor: '#0066cc',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
        });
}

async function carregarDadosUsuario(uid) {
    try {
        const docRef = window.doc(window.db, 'clientes', uid);
        const docSnap = await window.getDoc(docRef);
        
        if (docSnap.exists()) {
            const dados = docSnap.data();
            document.getElementById('checkoutName').value = dados.nome || '';
            document.getElementById('checkoutPhone').value = dados.telefone || '';
            
            if (dados.enderecos && dados.enderecos.length > 0) {
                const idx = dados.enderecoSelecionado || 0;
                document.getElementById('checkoutAddress').value = dados.enderecos[idx];
            }
        }
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// ===== FUNÇÃO HISTÓRICO ===== //
async function mostrarHistorico() {
    if (!currentUser) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Faça login primeiro',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    try {
        const pedidosRef = window.collection(window.db, 'pedidos');
        const q = window.query(
            pedidosRef,
            window.where('uid', '==', currentUser.uid)
        );
        
        const querySnapshot = await window.getDocs(q);
        
        if (querySnapshot.empty) {
            Swal.fire({
                icon: 'info',
                title: 'Sem pedidos',
                text: 'Você ainda não fez nenhum pedido',
                confirmButtonColor: '#0066cc',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
            return;
        }
        
        let pedidos = [];
        querySnapshot.forEach((doc) => {
            pedidos.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        pedidos.sort((a, b) => new Date(b.dataPedido) - new Date(a.dataPedido));
        
        let html = '<div style="max-height: 500px; overflow-y: auto; padding: 10px;">';
        
        pedidos.forEach((pedido, index) => {
            const data = pedido.dataPedido ? new Date(pedido.dataPedido).toLocaleDateString('pt-BR') : 'Data não disponível';
            const hora = pedido.dataPedido ? new Date(pedido.dataPedido).toLocaleTimeString('pt-BR') : '';
            const total = pedido.total ? parseFloat(pedido.total).toFixed(2) : '0.00';
            const endereco = pedido.endereco || 'Endereço não informado';
            const formaEntrega = pedido.formaEntrega || 'delivery';
            let formaPagamento = pedido.formaPagamento || 'não informado';
            
            if (formaPagamento.includes('Troco')) {
                formaPagamento = formaPagamento;
            } else if (formaPagamento === 'Dinheiro' || formaPagamento.includes('Dinheiro')) {
                formaPagamento = 'Dinheiro';
            } else if (formaPagamento === 'Pix') {
                formaPagamento = 'Pix';
            } else if (formaPagamento === 'Cartão') {
                formaPagamento = 'Cartão';
            }
            
            const itens = pedido.itens || [];
            const observacoes = pedido.observacoes || '';
            
            let itensHtml = '';
            itens.forEach(item => {
                const preco = item.preco || 0;
                const quantidade = item.quantidade || 0;
                const itemTotal = (preco * quantidade).toFixed(2);
                itensHtml += `
                    <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px dashed #eee;">
                        <span>${quantidade}x ${item.nome || 'Item'}</span>
                        <span>R$ ${itemTotal}</span>
                    </div>
                `;
            });
            
            html += `
                <div style="background: white; border-radius: 10px; margin-bottom: 15px; border: 1px solid #e0e0e0; overflow: hidden;">
                    <div onclick="togglePedido('${index}')" style="padding: 15px; background: #f8f9fa; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <span style="background: #0066cc; color: white; padding: 3px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">#${pedido.id.slice(-8)}</span>
                            <span style="margin-left: 10px; color: #666;">${data} - ${hora}</span>
                        </div>
                        <div>
                            <span style="font-weight: bold; color: #28a745;">R$ ${total}</span>
                            <i class="fas fa-chevron-down" style="margin-left: 10px; color: #0066cc;" id="icone-${index}"></i>
                        </div>
                    </div>
                    <div id="pedido-${index}" style="display: none; padding: 15px; border-top: 1px solid #e0e0e0;">
                        <div style="margin-bottom: 10px;">
                            <strong><i class="fas fa-map-marker-alt" style="color: #0066cc;"></i> Endereço:</strong>
                            <p style="margin: 5px 0 0 20px;">${endereco}</p>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <strong><i class="fas fa-truck" style="color: #0066cc;"></i> Entrega:</strong>
                            <p style="margin: 5px 0 0 20px;">${formaEntrega === 'delivery' ? 'Entrega em Casa' : 'Retirar no Local'}</p>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <strong><i class="fas fa-credit-card" style="color: #0066cc;"></i> Pagamento:</strong>
                            <p style="margin: 5px 0 0 20px;">${formaPagamento}</p>
                        </div>
                        ${observacoes ? `
                        <div style="margin-bottom: 10px;">
                            <strong><i class="fas fa-comment" style="color: #0066cc;"></i> Observações:</strong>
                            <p style="margin: 5px 0 0 20px;">${observacoes}</p>
                        </div>
                        ` : ''}
                        <div style="margin-bottom: 10px;">
                            <strong><i class="fas fa-shopping-bag" style="color: #0066cc;"></i> Itens:</strong>
                            <div style="margin: 5px 0 0 20px;">
                                ${itensHtml}
                            </div>
                        </div>
                        <button onclick="repetirPedido('${pedido.id}')" style="width: 100%; margin-top: 10px; padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">
                            <i class="fas fa-redo-alt"></i> Pedir Novamente
                        </button>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        
        Swal.fire({
            title: 'Histórico de Pedidos',
            html: html,
            width: 600,
            showConfirmButton: false,
            showCloseButton: true,
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        
    } catch (error) {
        console.error('❌ ERRO DETALHADO:', error);
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao carregar histórico: ' + error.message,
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
    }
}

function togglePedido(index) {
    const pedidoDiv = document.getElementById(`pedido-${index}`);
    const icone = document.getElementById(`icone-${index}`);
    
    if (pedidoDiv && icone) {
        if (pedidoDiv.style.display === 'none') {
            pedidoDiv.style.display = 'block';
            icone.className = 'fas fa-chevron-up';
        } else {
            pedidoDiv.style.display = 'none';
            icone.className = 'fas fa-chevron-down';
        }
    }
}

// ===== FUNÇÃO REPETIR PEDIDO ===== //
window.repetirPedido = async function(pedidoId) {
    try {
        const docRef = window.doc(window.db, 'pedidos', pedidoId);
        const docSnap = await window.getDoc(docRef);
        
        if (!docSnap.exists()) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Pedido não encontrado',
                confirmButtonColor: '#0066cc',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.zIndex = '9999999';
                }
            });
            return;
        }
        
        const p = docSnap.data();
        
        // Limpar carrinho atual
        if (typeof cart !== 'undefined') {
            cart.length = 0;
        }
        
        // Adicionar itens do pedido anterior
        if (p.itens && Array.isArray(p.itens)) {
            p.itens.forEach(item => {
                const produtoOriginal = window.produtos?.find(prod => prod.id === item.id);
                
                if (produtoOriginal && typeof cart !== 'undefined') {
                    cart.push({
                        ...produtoOriginal,
                        quantidade: item.quantidade || 1
                    });
                } else {
                    cart.push({
                        id: item.id,
                        nome: item.nome || 'Produto',
                        preco: item.preco || 0,
                        quantidade: item.quantidade || 1,
                        imagem: item.imagem || 'images/default.png',
                        categoria: item.categoria || 'Outros',
                        descricao: item.descricao || ''
                    });
                }
            });
        }
        
        // Atualizar interface do carrinho
        if (typeof window.updateCartPage === 'function') {
            window.updateCartPage();
        }
        if (typeof window.updateCartIcon === 'function') {
            window.updateCartIcon();
        }
        
        Swal.fire({
            icon: 'success',
            title: 'Itens adicionados!',
            text: 'Os itens foram adicionados ao seu carrinho',
            timer: 1500,
            showConfirmButton: false,
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        }).then(() => {
            if (typeof window.showCartPage === 'function') {
                window.showCartPage();
            }
        });
        
    } catch (error) {
        console.error('❌ Erro ao repetir pedido:', error);
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao repetir pedido: ' + error.message,
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
    }
};

// Funções de perfil (dados, endereços, etc.) - mantidas iguais
async function mostrarDados() {
    // ... (código existente, sem alterações)
}

async function mostrarEnderecos() {
    // ... (código existente, sem alterações)
}

async function selecionarEndereco(index) {
    // ... (código existente, sem alterações)
}

async function removerEndereco(index) {
    // ... (código existente, sem alterações)
}

function mostrarAlterarSenha() {
    // ... (código existente, sem alterações)
}

function confirmarExclusaoConta() {
    // ... (código existente, sem alterações)
}

async function excluirConta() {
    // ... (código existente, sem alterações)
}

function continuarCheckoutConvidado() {
    Swal.close();
    
    const loginModal = document.getElementById('loginModal');
    if (loginModal) loginModal.remove();
    
    const recuperarModal = document.getElementById('recuperarModal');
    if (recuperarModal) recuperarModal.remove();
    
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'block';
    document.getElementById('checkoutInfoSection').style.display = 'block';
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('confirmSection').style.display = 'none';
    
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
}

const originalProceedToCheckout = window.proceedToCheckout;

window.proceedToCheckout = async function() {
    if (typeof cart === 'undefined' || cart.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Carrinho vazio',
            confirmButtonColor: '#0066cc',
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    if (!currentUser) {
        Swal.fire({
            title: 'Finalizar Compra',
            html: `
                <div style="text-align: center;">
                    <button onclick="mostrarModalLogin(); Swal.close();" style="width: 100%; padding: 12px; margin-bottom: 10px; background: #0066cc; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Fazer Login</button>
                    <button onclick="mostrarModalLogin(); setTimeout(() => mudarAba('registro'), 100); Swal.close();" style="width: 100%; padding: 12px; margin-bottom: 10px; background: #28a745; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Criar Conta</button>
                    <button onclick="continuarCheckoutConvidado()" style="width: 100%; padding: 12px; background: #6c757d; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Continuar sem Login</button>
                </div>
            `,
            showConfirmButton: false,
            showCloseButton: true,
            didOpen: () => {
                document.querySelector('.swal2-container').style.zIndex = '9999999';
            }
        });
        return;
    }
    
    const firstTimeSim = document.getElementById('firstTimeSim');
    const naoTenhoGalao = document.getElementById('naoTenhoGalao');
    
    if (firstTimeSim && firstTimeSim.checked) {
        if (naoTenhoGalao && naoTenhoGalao.checked) {
            const temGalaoCompleto = verificarGalaoCompleto();
            if (!temGalaoCompleto) {
                recomendarGalaoCompleto();
                return;
            }
        } else {
            const galaoValidity = document.getElementById('galaoValidity').value;
            if (!galaoValidity) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Atenção',
                    text: 'Informe a data de validade do seu galão',
                    confirmButtonColor: '#0066cc',
                    didOpen: () => {
                        document.querySelector('.swal2-container').style.zIndex = '9999999';
                    }
                });
                return;
            }
        }
    }
    
    if (currentUser) {
        const enderecoEscolhido = await mostrarOpcoesEndereco();
        if (enderecoEscolhido) {
            document.getElementById('checkoutAddress').value = enderecoEscolhido;
        }
    }
    
    continuarCheckoutConvidado();
};

function atualizarInterfaceUsuario(user) {
    const userBtn = document.getElementById('userBtn');
    const loginBtn = document.getElementById('loginBtn');
    const dropdownEmail = document.getElementById('dropdownUserEmail');
    
    if (!userBtn || !loginBtn) return;
    
    if (user) {
        userBtn.style.display = 'flex';
        loginBtn.style.display = 'none';
        if (dropdownEmail) dropdownEmail.textContent = user.email;
    } else {
        userBtn.style.display = 'none';
        loginBtn.style.display = 'flex';
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) userDropdown.style.display = 'none';
    }
}

// ===== CORREÇÃO CRÍTICA - onAuthStateChanged ===== //
if (window.auth) {
    window.auth.onAuthStateChanged(async (user) => {
        currentUser = user;
        window.currentUser = user; // SINCRONIZAÇÃO CRÍTICA
        
        if (user) {
            await carregarDadosUsuario(user.uid);
            iniciarLogoutTimer();
        }
        atualizarInterfaceUsuario(user);
        setTimeout(restaurarInfoCapa, 500);
    });
} else {
    console.error('❌ auth não encontrado!');
}

// Exportar funções
window.mostrarModalLogin = mostrarModalLogin;
window.mudarAba = mudarAba;
window.mostrarRecuperarSenha = mostrarRecuperarSenha;
window.enviarRecuperacao = enviarRecuperacao;
window.fazerLogin = fazerLogin;
window.registrarUsuario = registrarUsuario;
window.fazerLogout = fazerLogout;
window.mostrarHistorico = mostrarHistorico;
window.mostrarDados = mostrarDados;
window.mostrarEnderecos = mostrarEnderecos;
window.mostrarAlterarSenha = mostrarAlterarSenha;
window.confirmarExclusaoConta = confirmarExclusaoConta;
window.continuarCheckoutConvidado = continuarCheckoutConvidado;
window.toggleGalaoValidity = toggleGalaoValidity;
window.selecionarEndereco = selecionarEndereco;
window.removerEndereco = removerEndereco;
window.irParaGalaoCompleto = irParaGalaoCompleto;
window.togglePedido = togglePedido;
window.repetirPedido = repetirPedido;
window.abrirMenuMobile = abrirMenuMobile;
window.fecharMenuMobile = fecharMenuMobile;