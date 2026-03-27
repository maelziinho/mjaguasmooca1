// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Galão Lindoya 6L",
        preco: 13.00,
        descricao: "Hidratação equilibrada e refrescante a qualquer hora do dia.",
        imagem: "images/lindoya6l.png",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true
    },
    {   id: 2,
        nome: "Galão 10L Refil",
        preco: 14.00,
        descricao: "Escolha a marca desejada",
        imagem: "images/galao10l.jpeg",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true,
        temVariacoes: true,
        nomeBase: "Galão 10L Refil",
        nomeExibicao: "Galão 10L Refil",
        marcas: [
            { 
                nome: "Crystal", 
                preco: 14.00, 
                imagem: "images/crystal.png",
                descricao: "Galão de água mineral crystal 10L"
            },
            { 
                nome: "Cantareira", 
                preco: 14.00, 
                imagem: "images/cantareira.png",
                descricao: "Galão de água mineral Cantareira 10L"
            }
        ]
    },
    {
        id: 3,
        nome: "Galão Crystal Refil 20L",
        preco: 16.00,
        descricao: "Sabor suave e refrescante, natural, leve e purificada.",
        imagem: "images/crystal.png",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true
    },
    {
        id: 4,
        nome: "Galão Cantareira Refil 20L",
        preco: 16.00,
        descricao: "Perfeita para acompanhar sua rotina com saúde e frescor.",
        imagem: "images/cantareira.png",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true
    },
    {
        id: 5,
        nome: "Galão Mogiana Refil 20L",
        preco: 18.00,
        descricao: "Hidratação saudável e de qualidade todos os dias.",
        imagem: "images/mogiana.png",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true
    },
    {
        id: 6,
        nome: "Acquamix Refil",
        preco: 16.00,
        descricao: "Água leve, com baixíssimo teor de sódio (0,05 mg/copo).",
        imagem: "images/acquamix.png",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true
    },
    {
        id: 7,
        nome: "Galão Lindoya Refil 20L",
        preco: 19.00,
        descricao: "Hidratação equilibrada e refrescante a qualquer hora do dia.",
        imagem: "images/lindoya.png",
        categoria: "Água Mineral",
        destaque: true,
        disponivel: true
    },
    // ===== PRODUTOS COM VARIAÇÕES ===== //
    {
        id: 8,
        nome: "Galão Completo 10L",
        preco: 40.00,
        descricao: "Escolha a marca desejada",
        imagem: "images/galao10l.jpeg",
        categoria: "Galão Completo",
        disponivel: true,
        temVariacoes: true,
        nomeBase: "Galão Completo 10L",
        nomeExibicao: "Galão Completo 10L",
        marcas: [
            { 
                nome: "Crystal", 
                preco: 40.00, 
                imagem: "images/crystal.png",
                descricao: "Galão completo Crystal 10L"
            },
            { 
                nome: "Cantareira", 
                preco: 40.00, 
                imagem: "images/cantareira.png",
                descricao: "Galão completo Cantareira 10L"
            }
        ]
    },
    {
        id: 9,
        nome: "Galão Completo 20L",
        preco: 50.00,
        descricao: "Escolha a marca desejada",
        imagem: "images/galaocompleto40.jpeg",
        categoria: "Galão Completo",
        disponivel: true,
        temVariacoes: true,
        nomeBase: "Galão Completo 20L",
        nomeExibicao: "Galão Completo 20L",
        marcas: [
            { 
                nome: "Crystal", 
                preco: 50.00, 
                imagem: "images/crystal.png",
                descricao: "Galão completo Crystal 20L"
            },
            { 
                nome: "Cantareira", 
                preco: 50.00, 
                imagem: "images/cantareira.png",
                descricao: "Galão completo Cantareira 20L"
            },
            { 
                nome: "Mogiana", 
                preco: 50.00, 
                imagem: "images/mogiana.png",
                descricao: "Galão completo Mogiana 20L"
            },
            { 
                nome: "Lindoya", 
                preco: 50.00, 
                imagem: "images/lindoya.png",
                descricao: "Galão completo Lindoya 20L"
            }
        ]
    },
    {
        id: 10,
        nome: "Galão Completo Ibirá 20L",
        preco: 55.00,
        descricao: "Galão completo 20 litros Ibirá",
        imagem: "images/galaocompleto50.jpeg",
        categoria: "Galão Completo",
        disponivel: true,
        temVariacoes: false
    },
    {
        id: 11,
        nome: "Acquamix Completo",
        preco: 42.00,
        descricao: "Água leve, com baixíssimo teor de sódio (0,05 mg/copo).",
        imagem: "images/acquamix.png",
        categoria: "Galão Completo",
        disponivel: true,
        temVariacoes: false
    },
    // ===== FIM PRODUTOS COM VARIAÇÕES ===== //
    {
        id: 13,
        nome: "Fardo de Água 510ml Sem Gás",
        preco: 16.00,
        descricao: "Pack com 12 unidades.",
        imagem: "images/garrafa510ml.png",
        categoria: "Fardos",
        disponivel: true
    },
    {
        id: 14,
        nome: "Fardo de Água 510ml Com Gás",
        preco: 23.00,
        descricao: "Pack com 12 unidades.",
        imagem: "images/comgas510ml.png",
        categoria: "Fardos",
        disponivel: true
    },
    {
        id: 15,
        nome: "Fardo de Água 1,5l Sem Gás",
        preco: 25.00,
        descricao: "Pack com 6 unidades.",
        imagem: "images/garrafa15l.png",
        categoria: "Fardos",
        disponivel: true
    },
    {
        id: 16,
        nome: "Caixa de Copos",
        preco: 42.00,
        descricao: "Caixa com 48 unidades de 200ml cada.",
        imagem: "images/caixadecopos.jpg",
        categoria: "Fardos",
        disponivel: true
    },
    {
        id: 17,
        nome: "Xarope Para Soda Italiana (Sabores)",
        preco: 45.00,
        descricao: "O segredo para uma soda italiana perfeita está na qualidade do xarope.",
        imagem: "images/xaropes.webp",
        categoria: "Fardos",
        disponivel: true
    },
    {
        id: 18,
        nome: "Bomba Elétrica",
        preco: 45.00,
        descricao: "Bomba Elétrica Para Galão de Água.",
        imagem: "images/bombaeletrica.jpeg",
        categoria: "Fardos",
        disponivel: false
    },
    {
        id: 19,
        nome: "Bomba Manual",
        preco: 27.00,
        descricao: "Bomba Manual Para Galão de Água.",
        imagem: "images/bombamanual.jpeg",
        categoria: "Fardos",
        disponivel: true
    },
    {
        id: 20,
        nome: "Água sem Gás 510ml",
        preco: 2.50,
        descricao: "Água Mineral Natural Puraqua 510ml.",
        imagem: "images/garrafa510ml.png",
        categoria: "Água Gelada",
        disponivel: true
    },
    {
        id: 21,
        nome: "Água com Gás 510ml",
        preco: 3.00,
        descricao: "Água Mineral Natural Puraqua Com Gás 510ml.",
        imagem: "images/comgas510ml.png",
        categoria: "Água Gelada",
        disponivel: true
    },
    {
        id: 22,
        nome: "Água sem Gás 1,5L",
        preco: 3.50,
        descricao: "Água Mineral Natural Puraqua Sem Gás 1,5l.",
        imagem: "images/garrafa15l.png",
        categoria: "Água Gelada",
        disponivel: true
    }
];

// Variáveis globais
let cart = [];
let cupomAplicado = null;
let deliveryFee = 0;
let cepValidado = false;

// CEPs com taxa de entrega
const cepsComTaxa = {
    "03112080": 5.00,
    "03178000": 5.00,
    "03178001": 7.50,
    "12345678": 15.00,
    "87654321": 10.00
};

// Cupons válidos
const cuponsValidos = {
    "MJAGUA10": { desconto: 10, tipo: "percentual" },
    "FRETEGRATIS": { desconto: 0, tipo: "fretegratis" }
};

// ========== FUNÇÕES DO CARRINHO ========== //

function updateCartPage() {
    const container = document.getElementById('cartItemsContainer');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartDelivery = document.getElementById('cartDelivery');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    
    container.innerHTML = '';
    let subtotal = 0;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">Seu carrinho está vazio</div>';
        cartSubtotal.textContent = 'R$ 0.00';
        cartDelivery.textContent = 'Grátis';
        cartTotalPrice.textContent = 'R$ 0.00';
        updateCartIcon();
        return;
    }
    
    cart.forEach(item => {
        const itemTotal = item.preco * item.quantidade;
        subtotal += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.nome}</div>
                <div class="item-price">R$ ${item.preco.toFixed(2)}</div>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantidade - 1})">-</button>
                <span>${item.quantidade}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantidade + 1})">+</button>
            </div>
            <div class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </div>
        `;
        container.appendChild(itemDiv);
    });
    
    let total = subtotal;
    if (cupomAplicado && cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "percentual") {
        total *= (1 - cuponsValidos[cupomAplicado].desconto / 100);
    }
    
    let finalDeliveryFee = deliveryFee;
    if (cupomAplicado && cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "fretegratis") {
        finalDeliveryFee = 0;
    }
    
    total += finalDeliveryFee;
    
    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
    
    if (finalDeliveryFee > 0) {
        cartDelivery.textContent = `R$ ${finalDeliveryFee.toFixed(2)}`;
        cartDelivery.style.color = '#e74c3c';
    } else {
        cartDelivery.textContent = 'Grátis';
        cartDelivery.style.color = '#27ae60';
    }
    
    cartTotalPrice.textContent = `R$ ${total.toFixed(2)}`;
    
    updateCouponDisplay();
    updateCartIcon();
}

function updateCartIcon() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantidade, 0);
}

// ===== FUNÇÃO PARA MOSTRAR OPÇÕES DE MARCAS ===== //
function mostrarOpcoesMarcas(produtoBase, marcas) {
    let marcasHtml = '';
    marcas.forEach((marca, index) => {
        marcasHtml += `
            <div onclick="selecionarMarca('${produtoBase.nomeBase}', '${marca.nome}', ${marca.preco}, ${produtoBase.id}, ${index})" 
                 style="border: 2px solid #e0e0e0; border-radius: 10px; padding: 15px; margin-bottom: 10px; cursor: pointer; display: flex; align-items: center; gap: 15px; transition: all 0.3s;"
                 onmouseover="this.style.borderColor='#0066cc'"
                 onmouseout="this.style.borderColor='#e0e0e0'">
                <img src="${marca.imagem}" alt="${marca.nome}" style="width: 50px; height: 50px; object-fit: contain;">
                <div style="flex: 1;">
                    <strong style="font-size: 16px; color: #333;">${marca.nome}</strong>
                    <p style="margin: 5px 0 0 0; color: #666;">${marca.descricao || ''}</p>
                </div>
                <div style="font-weight: bold; color: #28a745; font-size: 18px;">R$ ${marca.preco.toFixed(2)}</div>
            </div>
        `;
    });
    
    Swal.fire({
        title: `Escolha a marca - ${produtoBase.nomeExibicao}`,
        html: `<div style="max-height: 400px; overflow-y: auto;">${marcasHtml}</div>`,
        showConfirmButton: false,
        showCloseButton: true,
        width: 500,
        didOpen: () => {
            document.querySelector('.swal2-container').style.zIndex = '9999999';
        }
    });
}

// Função auxiliar para selecionar a marca
window.selecionarMarca = function(nomeBase, nomeMarca, preco, idBase, index) {
    Swal.close();
    
    // Criar o nome completo do produto
    const nomeCompleto = `${nomeBase} ${nomeMarca}`;
    
    // Criar um ID único baseado no ID base + índice
    const novoId = parseInt(idBase.toString() + index.toString());
    
    // Adicionar ao carrinho
    const produto = {
        id: novoId,
        nome: nomeCompleto,
        preco: preco,
        descricao: `Galão completo ${nomeMarca}`,
        imagem: `images/${nomeMarca.toLowerCase().replace(/\s+/g, '')}.png`,
        categoria: "Galão Completo"
    };
    
    adicionarAoCarrinhoComMarca(produto);
};

// Função para adicionar ao carrinho com marca específica
function adicionarAoCarrinhoComMarca(produto) {
    const itemExistente = cart.find(item => item.id === produto.id);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        cart.push({
            ...produto,
            quantidade: 1
        });
    }
    
    updateCartPage();
    showCoolNotification(`✔️ ${produto.nome} adicionado`);
}

// ===== FUNÇÃO ADICIONAR AO CARRINHO MODIFICADA ===== //
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    
    // Verificar se o produto tem variações
    if (produto.temVariacoes && produto.marcas && produto.marcas.length > 0) {
        // Mostrar modal para escolher a marca
        mostrarOpcoesMarcas(produto, produto.marcas);
        return;
    }
    
    // Produto sem variações - adicionar normalmente
    const itemExistente = cart.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        cart.push({
            ...produto,
            quantidade: 1
        });
    }
    
    updateCartPage();
    showCoolNotification(`✔️ ${produto.nome} adicionado`);
}

function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantidade = newQuantity;
        updateCartPage();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartPage();
}

function aplicarCupom() {
    const cupomInput = document.getElementById('couponCode').value.trim();
    
    if (cuponsValidos[cupomInput]) {
        cupomAplicado = cupomInput;
        showCoolNotification(`🎉 Cupom aplicado!`);
        updateCartPage();
    } else {
        showCoolNotification("❌ Cupom inválido");
    }
}

function removerCupom() {
    cupomAplicado = null;
    document.getElementById('couponCode').value = '';
    updateCartPage();
}

function updateCouponDisplay() {
    const couponApplied = document.getElementById('couponApplied');
    const appliedCouponText = document.getElementById('appliedCouponText');
    
    if (cupomAplicado) {
        couponApplied.style.display = 'flex';
        appliedCouponText.textContent = `Cupom: ${cupomAplicado}`;
        
        if (cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "percentual") {
            appliedCouponText.textContent += ` (${cuponsValidos[cupomAplicado].desconto}% de desconto)`;
        } else if (cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "fretegratis") {
            appliedCouponText.textContent += ` (Frete Grátis)`;
        }
    } else {
        couponApplied.style.display = 'none';
    }
}

// ========== FUNÇÕES DE NAVEGAÇÃO ========== //

function showInicio() {
    document.getElementById('header').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('orderConfirmation').style.display = 'none';
    document.getElementById('btnAbrirAssistente').style.display = 'block';
    const statusOperacao = document.getElementById('status-operacao');
    if (statusOperacao) {
        statusOperacao.style.display = 'block';
        statusOperacao.style.position = 'fixed';
        statusOperacao.style.top = '20px';
        statusOperacao.style.left = '20px';
        statusOperacao.style.zIndex = '200';
    }
    loadDestaqueProducts();
}

function showCartPage() {
    document.getElementById("header").style.display = "none";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("cartPage").style.display = "block";
    document.getElementById("checkoutPage").style.display = "none";
    document.getElementById("orderConfirmation").style.display = "none";
    document.getElementById("btnAbrirAssistente").style.display = "none";
    document.getElementById("assistente").style.display = "none";
    updateCartPage();
}

function backToCatalog() {
    document.getElementById("cartPage").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("btnAbrirAssistente").style.display = "block";
}

function backToCart() {
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'block';
}

function loadDestaqueProducts() {
    const container = document.getElementById('produtos-destaque');
    const categoriaHeader = document.getElementById('categoria-header');
    const tituloBemVindas = document.getElementById('titulo-boas-vindas');
    
    container.innerHTML = '';
    categoriaHeader.style.display = 'none';
    tituloBemVindas.style.display = 'block';
    
    produtos.forEach(produto => {
        if (produto.destaque) {
            container.appendChild(createProductCard(produto));
        }
    });
}

function filterProducts(categoria) {
    const container = document.getElementById("produtos-destaque");
    const categoriaHeader = document.getElementById("categoria-header");
    const categoriaTitulo = document.getElementById("categoria-titulo");
    const tituloBemVindas = document.getElementById("titulo-boas-vindas");
    
    container.innerHTML = "";
    categoriaHeader.style.display = "block";
    tituloBemVindas.style.display = "none";
    categoriaTitulo.textContent = categoria;
    
    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
    
    if (produtosFiltrados.length === 0) {
        container.innerHTML = "<p>Nenhum produto encontrado nesta categoria.</p>";
        return;
    }
    
    produtosFiltrados.forEach(produto => {
        container.appendChild(createProductCard(produto));
    });
    document.getElementById("btnAbrirAssistente").style.display = "block";
}

function createProductCard(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');
    if (!produto.disponivel) {
        produtoDiv.classList.add('indisponivel');
    }
    
    let botaoHtml;
    if (!produto.disponivel) {
        botaoHtml = `<button class="avise-me-btn" onclick="avisarMeWhatsapp('${produto.nome}')"><i class="fas fa-bell"></i> Avise-me</button>`;
    } else if (produto.temVariacoes) {
        botaoHtml = `<button onclick="adicionarAoCarrinho(${produto.id})" style="background: #ff9800;"><i class="fas fa-tags"></i> Escolher Marca</button>`;
    } else {
        botaoHtml = `<button onclick="adicionarAoCarrinho(${produto.id})"><i class="fas fa-cart-plus"></i> Pedir Agora</button>`;
    }
    
    produtoDiv.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="produto-content">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <span class="produto-price">R$ ${produto.preco.toFixed(2)}</span>
            ${botaoHtml}
        </div>
    `;
    return produtoDiv;
}

// ========== FUNÇÕES DO CHECKOUT ========== //

function proceedToCheckout() {
    if (cart.length === 0) {
        showCoolNotification("❌ Seu carrinho está vazio");
        return;
    }
    
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'block';
    
    document.getElementById('checkoutInfoSection').style.display = 'block';
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('confirmSection').style.display = 'none';
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    
    // Configurar o campo de agendamento
    setupScheduleInput();
}

// ===== FUNÇÃO DE AGENDAMENTO CORRIGIDA (5 DIAS, 9:00 - 17:00) ===== //

function setupScheduleInput() {
    const dateInput = document.getElementById('checkoutSchedule');
    if (!dateInput) return;
    
    // Calcular data máxima (hoje + 5 dias)
    const hoje = new Date();
    const dataMaxima = new Date(hoje);
    dataMaxima.setDate(hoje.getDate() + 5);
    
    // Formatar para o padrão do input date
    const anoHoje = hoje.getFullYear();
    const mesHoje = String(hoje.getMonth() + 1).padStart(2, '0');
    const diaHoje = String(hoje.getDate()).padStart(2, '0');
    
    const anoMax = dataMaxima.getFullYear();
    const mesMax = String(dataMaxima.getMonth() + 1).padStart(2, '0');
    const diaMax = String(dataMaxima.getDate()).padStart(2, '0');
    
    dateInput.setAttribute('min', `${anoHoje}-${mesHoje}-${diaHoje}`);
    dateInput.setAttribute('max', `${anoMax}-${mesMax}-${diaMax}`);
    
    // Se tiver um valor, validar
    if (dateInput.value) {
        validateScheduleDate();
    }
}

function validateScheduleDate() {
    const dateInput = document.getElementById('checkoutSchedule');
    const timeInput = document.getElementById('checkoutScheduleTime');
    const scheduleError = document.getElementById('scheduleError');
    
    if (!dateInput || !scheduleError) return true;
    
    const dataValue = dateInput.value;
    
    // Se não tem data, não valida (é opcional)
    if (!dataValue) {
        scheduleError.style.display = 'none';
        return true;
    }
    
    // Se TEM DATA, o HORÁRIO É OBRIGATÓRIO
    if (!timeInput || !timeInput.value) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = '⚠️ Informe o horário do agendamento (09:00 às 17:00)';
        return false;
    }
    
    const scheduledDate = new Date(dataValue);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    // Validar data (até 5 dias após hoje)
    const diffTime = scheduledDate - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = '⚠️ Não é possível agendar para datas passadas';
        dateInput.value = '';
        if (timeInput) timeInput.value = '';
        return false;
    }
    
    if (diffDays > 5) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = '⚠️ Agendamentos disponíveis apenas até 5 dias após hoje';
        dateInput.value = '';
        if (timeInput) timeInput.value = '';
        return false;
    }
    
    // Validar horário
    const [hours, minutes] = timeInput.value.split(':').map(Number);
    
    if (hours < 9 || hours > 17 || (hours === 17 && minutes > 0)) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = '⚠️ Horários disponíveis: 09:00 às 17:00';
        timeInput.value = '';
        return false;
    }
    
    scheduleError.style.display = 'none';
    return true;
}
function selectDeliveryOption(option) {
    const addressSection = document.getElementById('addressSection');
    
    document.querySelectorAll('.delivery-option').forEach(deliveryOption => {
        deliveryOption.classList.remove('selected');
    });
    
    if (option === 'delivery') {
        document.getElementById('checkoutDelivery').checked = true;
        document.getElementById('checkoutDelivery').closest('.delivery-option').classList.add('selected');
        if (addressSection) addressSection.style.display = 'block';
    } else {
        document.getElementById('checkoutPickup').checked = true;
        document.getElementById('checkoutPickup').closest('.delivery-option').classList.add('selected');
        if (addressSection) addressSection.style.display = 'none';
    }
}

function selectPaymentMethod(method) {
    const cashChangeSection = document.getElementById('cashChangeSection');
    
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`#payment${method.charAt(0).toUpperCase() + method.slice(1)}`).closest('.payment-option');
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    document.getElementById(`payment${method.charAt(0).toUpperCase() + method.slice(1)}`).checked = true;
    
    if (method === 'cash') {
        cashChangeSection.style.display = 'block';
    } else {
        cashChangeSection.style.display = 'none';
    }
}

function selectChangeOption(option) {
    const cashAmountGroup = document.getElementById('cashAmountGroup');
    
    document.querySelectorAll('.change-option').forEach(changeOption => {
        changeOption.classList.remove('selected');
    });
    
    if (option === 'yes') {
        document.getElementById('changeYes').checked = true;
        document.getElementById('changeYes').closest('.change-option').classList.add('selected');
        if (cashAmountGroup) cashAmountGroup.style.display = 'block';
    } else {
        document.getElementById('changeNo').checked = true;
        document.getElementById('changeNo').closest('.change-option').classList.add('selected');
        if (cashAmountGroup) cashAmountGroup.style.display = 'none';
        document.getElementById('cashAmount').value = '';
    }
}

function nextStep(step) {
    if (step === 'payment') {
        // Pegar valores dos campos
        const name = document.getElementById('checkoutName')?.value.trim();
        const phone = document.getElementById('checkoutPhone')?.value.trim();
        const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
        
        console.log('Validando campos:', { name, phone, deliveryMethod, opcaoSelecionada });
        
        // Validar nome
        if (!name) {
            showCoolNotification("❌ Informe seu nome completo");
            return;
        }
        
        // Validar telefone
        if (!phone) {
            showCoolNotification("❌ Informe seu telefone");
            return;
        }
        
        // Validar método de entrega
        if (!deliveryMethod) {
            showCoolNotification("❌ Selecione o método de entrega");
            return;
        }
        
        // Validar endereço se for entrega em casa
        if (deliveryMethod.value === 'delivery') {
            const address = document.getElementById('checkoutAddress')?.value.trim();
            if (!address) {
                showCoolNotification("❌ Informe o endereço de entrega");
                return;
            }
        }
        
        // Validar opção de primeira compra
        if (opcaoSelecionada === 'sim') {
            const galaoValidity = document.getElementById('galaoValidity')?.value;
            if (!galaoValidity) {
                showCoolNotification("❌ Informe a data de validade do seu galão");
                return;
            }
        }
        
        if (opcaoSelecionada === 'naoTenho') {
            const temGalaoCompleto = verificarGalaoCompleto();
            if (!temGalaoCompleto) {
                recomendarGalaoCompleto();
                return;
            }
        }
        
        // Validar agendamento se foi preenchido
        const scheduleDate = document.getElementById('checkoutSchedule')?.value;
        if (scheduleDate) {
            const isValid = validateScheduleDate();
            if (!isValid) return;
        }
    } 
    else if (step === 'confirm') {
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethod) {
            showCoolNotification("❌ Selecione um método de pagamento");
            return;
        }
        
        if (paymentMethod.value === 'cash') {
            const changeOption = document.querySelector('input[name="changeOption"]:checked');
            if (!changeOption) {
                showCoolNotification("❌ Selecione se precisa de troco");
                return;
            }
            
            if (changeOption.value === 'yes') {
                const cashAmount = document.getElementById('cashAmount')?.value.trim();
                if (!cashAmount) {
                    showCoolNotification("❌ Informe o valor em dinheiro");
                    return;
                }
            }
        }
    }
    
    // Avançar para o próximo passo
    document.getElementById('checkoutInfoSection').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('confirmSection').style.display = 'none';
    
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    
    if (step === 'payment') {
        document.getElementById('paymentSection').style.display = 'block';
        document.getElementById('step2').classList.add('active');
    } else if (step === 'confirm') {
        document.getElementById('confirmSection').style.display = 'block';
        document.getElementById('step3').classList.add('active');
        updateOrderReview();
    }
}

function prevStep(step) {
    document.getElementById('checkoutInfoSection').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('confirmSection').style.display = 'none';
    
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    
    if (step === 'info') {
        document.getElementById('checkoutInfoSection').style.display = 'block';
        document.getElementById('step1').classList.add('active');
    } else if (step === 'payment') {
        document.getElementById('paymentSection').style.display = 'block';
        document.getElementById('step2').classList.add('active');
    }
}

function updateOrderReview() {
    document.getElementById('reviewName').textContent = `Nome: ${document.getElementById('checkoutName').value}`;
    document.getElementById('reviewPhone').textContent = `Telefone: ${document.getElementById('checkoutPhone').value}`;
    
    // PEGAR DATA E HORÁRIO CORRETAMENTE NA CONFIRMAÇÃO
    const scheduleDate = document.getElementById('checkoutSchedule').value;
    const scheduleTime = document.getElementById('checkoutScheduleTime').value;
    let scheduleFormatted = '';
    
    if (scheduleDate) {
        const dataObj = new Date(scheduleDate);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        
        if (scheduleTime) {
            scheduleFormatted = `${dia}/${mes}/${ano} às ${scheduleTime}`;
        } else {
            scheduleFormatted = `${dia}/${mes}/${ano}`;
        }
        document.getElementById('reviewSchedule').textContent = `Agendado para: ${scheduleFormatted}`;
    } else {
        document.getElementById('reviewSchedule').textContent = '';
    }
    
    // VALIDADE DO GALÃO (MÊS/ANO)
    if (opcaoSelecionada === 'sim') {
        const galaoValidity = document.getElementById('galaoValidity').value;
        const naoTenhoGalao = document.getElementById('naoTenhoGalao');
        
        if (naoTenhoGalao && naoTenhoGalao.checked) {
            document.getElementById('reviewFirstTime').textContent = `Primeira Compra - Não tenho galão (Galão Completo adicionado)`;
        } else if (galaoValidity) {
            const [anoVal, mesVal] = galaoValidity.split('-');
            const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            const mesNome = meses[parseInt(mesVal) - 1];
            document.getElementById('reviewFirstTime').textContent = `Primeira Compra - Validade do Galão: ${mesNome}/${anoVal}`;
        } else {
            document.getElementById('reviewFirstTime').textContent = `Primeira Compra`;
        }
    } else {
        document.getElementById('reviewFirstTime').textContent = '';
    }
    
    // Resto do código continua igual...
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
    document.getElementById('reviewMethod').textContent = `Método: ${deliveryMethod.value === 'delivery' ? 'Entrega em Casa' : 'Retirar no Local'}`;
    
    if (deliveryMethod.value === 'delivery') {
        document.getElementById('reviewAddress').textContent = `Endereço: ${document.getElementById('checkoutAddress').value}`;
        const notes = document.getElementById('checkoutNotes').value.trim();
        document.getElementById('reviewNotes').textContent = notes ? `Observações: ${notes}` : '';
    } else {
        document.getElementById('reviewAddress').textContent = '';
        document.getElementById('reviewNotes').textContent = '';
    }
    
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    let paymentText = paymentMethod.value === 'pix' ? 'Pix' : 
                     paymentMethod.value === 'card' ? 'Cartão' : 'Dinheiro';
    document.getElementById('reviewPayment').textContent = `Pagamento: ${paymentText}`;
    
    if (paymentMethod.value === 'cash') {
        const changeOption = document.querySelector('input[name="changeOption"]:checked');
        if (changeOption && changeOption.value === 'yes') {
            document.getElementById('reviewChange').textContent = `Troco para: R$ ${document.getElementById('cashAmount').value}`;
        } else {
            document.getElementById('reviewChange').textContent = 'Não precisa de troco';
        }
    } else {
        document.getElementById('reviewChange').textContent = '';
    }
    
    const reviewItems = document.getElementById('reviewItems');
    reviewItems.innerHTML = '';
    
    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.preco * item.quantidade;
        subtotal += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('review-item');
        itemDiv.innerHTML = `
            <span>${item.nome} (${item.quantidade}x)</span>
            <span>R$ ${itemTotal.toFixed(2)}</span>
        `;
        reviewItems.appendChild(itemDiv);
    });
    
    let total = subtotal;
    if (cupomAplicado && cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "percentual") {
        total *= (1 - cuponsValidos[cupomAplicado].desconto / 100);
    }
    
    let finalDeliveryFee = deliveryFee;
    if (cupomAplicado && cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "fretegratis") {
        finalDeliveryFee = 0;
    }
    total += finalDeliveryFee;
    
    document.getElementById('reviewTotal').textContent = `R$ ${total.toFixed(2)}`;
}
// ===== FUNÇÃO CONFIRMAR PEDIDO CORRIGIDA ===== //

function confirmOrder() {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (!name || !phone || !deliveryMethod || !paymentMethod) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Preencha todas as informações obrigatórias',
            confirmButtonColor: '#0066cc'
        });
        return;
    }
    
    const address = deliveryMethod.value === 'delivery' ? document.getElementById('checkoutAddress').value.trim() : '';
    const notes = document.getElementById('checkoutNotes').value.trim();
    
    if (deliveryMethod.value === 'delivery' && !address) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção',
            text: 'Informe o endereço de entrega',
            confirmButtonColor: '#0066cc'
        });
        return;
    }
    
    let paymentDetails = paymentMethod.value === 'pix' ? 'Pix' : 
                       paymentMethod.value === 'card' ? 'Cartão' : 'Dinheiro';
    
    if (paymentMethod.value === 'cash') {
        const changeOption = document.querySelector('input[name="changeOption"]:checked');
        if (changeOption && changeOption.value === 'yes') {
            const cashAmount = document.getElementById('cashAmount').value;
            paymentDetails += ` (Troco para R$ ${cashAmount})`;
        } else {
            paymentDetails += " (Não precisa de troco)";
        }
    }
    
    let subtotal = cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    let total = subtotal;
    
    if (cupomAplicado && cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "percentual") {
        total *= (1 - cuponsValidos[cupomAplicado].desconto / 100);
    }
    
    let finalDeliveryFee = deliveryFee;
    if (cupomAplicado && cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "fretegratis") {
        finalDeliveryFee = 0;
    }
    total += finalDeliveryFee;
    
    // PEGAR DATA E HORÁRIO CORRETAMENTE
    const scheduleDate = document.getElementById('checkoutSchedule').value;
    const scheduleTime = document.getElementById('checkoutScheduleTime').value;
    let scheduleFormatted = '';
    
    if (scheduleDate) {
        const dataObj = new Date(scheduleDate);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        
        if (scheduleTime) {
            // Tem data e horário
            scheduleFormatted = `${dia}/${mes}/${ano} às ${scheduleTime}`;
        } else {
            // Só tem data - NÃO DEVERIA ACONTECER POR CAUSA DA VALIDAÇÃO
            scheduleFormatted = `${dia}/${mes}/${ano}`;
        }
    }
    
    const firstTime = document.querySelector('input[name="firstTime"]:checked');
    const galaoValidity = document.getElementById('galaoValidity').value;
    const naoTenhoGalao = document.getElementById('naoTenhoGalao');
    
    let message = `*Pedido MJ Águas*\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Telefone:* ${phone}\n`;
    
    if (scheduleFormatted) {
        message += `*Agendamento:* ${scheduleFormatted}\n`;
    }
    
    if (opcaoSelecionada === 'sim') {
        message += `*Primeira Compra:* Sim\n`;
        if (naoTenhoGalao && naoTenhoGalao.checked) {
            message += `*Não tenho galão* - Galão Completo adicionado\n`;
        } else if (galaoValidity) {
            // Formatar mês/ano (ex: 2026-11 -> novembro/2026)
            const [anoVal, mesVal] = galaoValidity.split('-');
            const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            const mesNome = meses[parseInt(mesVal) - 1];
            message += `*Validade do Galão:* ${mesNome}/${anoVal}\n`;
        }
    }
    message += `\n`;
    
    message += `*Itens do pedido:*\n`;
    cart.forEach(item => {
        message += `- ${item.nome} (${item.quantidade}x) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    message += `\n*Subtotal:* R$ ${subtotal.toFixed(2)}\n`;
    
    if (cupomAplicado) {
        message += `*Cupom aplicado:* ${cupomAplicado}\n`;
        if (cuponsValidos[cupomAplicado] && cuponsValidos[cupomAplicado].tipo === "percentual") {
            message += `*Desconto:* ${cuponsValidos[cupomAplicado].desconto}%\n`;
        }
    }
    
    message += `*Frete:* Será confirmado conforme distância\n\n`;
    
    message += `*Forma de entrega:* ${deliveryMethod.value === 'delivery' ? 'Entrega em Casa' : 'Retirar no Local'}\n`;
    if (deliveryMethod.value === 'delivery') {
        // Formatar o endereço para enviar apenas Rua, Número e Complemento
        // O endereço salvo segue o padrão: "Rua, Numero - Complemento, Bairro, Cidade - CEP: 00000-000 (Tipo)"
        let enderecoFormatado = address;
        
        // 1. Remove o tipo entre parênteses no final (ex: (Residencial))
        if (enderecoFormatado.includes(' (')) {
            enderecoFormatado = enderecoFormatado.split(' (')[0];
        }
        
        // 2. Remove o CEP se houver (ex: - CEP: 03103-001)
        if (enderecoFormatado.includes(' - CEP:')) {
            enderecoFormatado = enderecoFormatado.split(' - CEP:')[0];
        }
        
        // 3. Pega apenas as duas primeiras partes (Rua e Numero/Complemento)
        // O padrão de salvamento em auth-ui.js é `${rua}, ${numero} - ${complemento}, ${bairro}...`
        const partes = enderecoFormatado.split(',');
        if (partes.length >= 2) {
            enderecoFormatado = partes[0].trim() + ', ' + partes[1].trim();
        }

        message += `*Endereço:* ${enderecoFormatado}\n`;
    }
    message += `*Forma de pagamento:* ${paymentDetails}\n\n`;
    
    if (notes) {
        message += `*Observações:*\n${notes}\n\n`;
    }
    
    message += `Aguardando confirmação!`;
    
    const phoneNumber = "5511997585578";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Mostrar loading
    Swal.fire({
        title: 'Enviando pedido...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    
    // Salvar no Firebase se usuário estiver logado
    if (window.currentUser) {
        const pedidoData = {
            itens: cart.map(item => ({
                id: item.id,
                nome: item.nome,
                quantidade: item.quantidade,
                preco: item.preco
            })),
            subtotal: subtotal,
            cupom: cupomAplicado,
            frete: finalDeliveryFee,
            total: total,
            nome: name,
            telefone: phone,
            endereco: address,
            observacoes: notes,
            formaEntrega: deliveryMethod.value,
            formaPagamento: paymentDetails,
            agendamento: scheduleFormatted,
            primeiraCompra: opcaoSelecionada === 'sim',
            validadeGalao: galaoValidity,
            dataPedido: new Date().toISOString()
        };
        
        // Gerar número de pedido numérico baseado no timestamp (últimos 6 dígitos)
        const pedidoNumero = Date.now().toString().slice(-6);
        
        window.addDoc(window.collection(window.db, 'pedidos'), {
            ...pedidoData,
            pedidoNumero: pedidoNumero,
            uid: window.currentUser.uid,
            email: window.currentUser.email
        })
        .then((docRef) => {
            console.log('✅ Pedido salvo! ID:', docRef.id);
        })
        .catch((error) => {
            console.error('❌ Erro ao salvar:', error);
        });
    }
    
    // Limpar carrinho
    cart = [];
    cupomAplicado = null;
    deliveryFee = 0;
    cepValidado = false;
    updateCartPage();
    updateCartIcon();
    
    // Voltar para a tela inicial e mostrar mensagem de sucesso
    setTimeout(() => {
        Swal.close();
        
        document.getElementById('checkoutPage').style.display = 'none';
        document.getElementById('inicio').style.display = 'block';
        document.getElementById('header').style.display = 'none';
        document.getElementById('cartPage').style.display = 'none';
        
        Swal.fire({
            icon: 'success',
            title: 'Pedido enviado!',
            text: 'Em breve você receberá a confirmação no WhatsApp',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0066cc'
        });
    }, 1500);
}

// ===== FUNÇÃO DE STATUS CORRIGIDA (FECHA DOMINGO) ===== //

function updateStatus() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    
    if (!statusDot || !statusText) return;
    
    if (diaSemana === 0) {
        statusText.textContent = 'Fechado (Domingo)';
        statusDot.style.backgroundColor = 'red';
        return;
    }
    
    if (horaAtual >= 8 && horaAtual < 18) {
        statusText.textContent = 'Aberto';
        statusDot.style.backgroundColor = 'green';
    } else {
        statusText.textContent = 'Fechado';
        statusDot.style.backgroundColor = 'red';
    }
}

function showCoolNotification(message) {
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        text: message,
        showConfirmButton: false,
        timer: 2000,
        toast: true
    });
}

function abrirAssistente() {
    document.getElementById('assistente').style.display = 'block';
    document.getElementById('btnAbrirAssistente').style.display = 'none';
    document.getElementById('assistente').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('assistente').style.animation = 'surgir 0.3s ease-out';
    }, 10);
}

function fecharAssistente() {
    document.getElementById('assistente').style.display = 'none';
    document.getElementById('btnAbrirAssistente').style.display = 'block';
}

// Funcionalidade de arrastar o botão flutuante
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const btnAbrirAssistente = document.getElementById('btnAbrirAssistente');

if (btnAbrirAssistente) {
    btnAbrirAssistente.addEventListener('mousedown', dragStart);
    btnAbrirAssistente.addEventListener('touchstart', dragStart);
}

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', dragEnd);
document.addEventListener('touchend', dragEnd);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === btnAbrirAssistente) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, btnAbrirAssistente);
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function setTranslate(xPos, yPos, el) {
    if (el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.assistente') && !e.target.closest('.btn-abrir-assistente')) {
        fecharAssistente();
    }
});

// ========== NOVAS FUNCIONALIDADES ==========

function toggleGalaoValidity() {
    const firstTimeSim = document.getElementById('firstTimeSim');
    const galaoValidityGroup = document.getElementById('galaoValidityGroup');
    
    if (!firstTimeSim || !galaoValidityGroup) return;
    
    if (firstTimeSim.checked) {
        galaoValidityGroup.style.display = 'block';
    } else {
        galaoValidityGroup.style.display = 'none';
        document.getElementById('galaoValidity').value = '';
    }
}

function avisarMeWhatsapp(nomeProduto) {
    const mensagem = `Olá, gostaria de ser avisado quando o produto "${nomeProduto}" estiver disponível`;
    const phoneNumber = "5511997585578";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// ===== FUNÇÃO DE AGENDAMENTO CORRIGIDA (5 DIAS, 9:30 - 17:30) ===== //

function validateScheduleTime() {
    const scheduleInput = document.getElementById('checkoutSchedule');
    const scheduleError = document.getElementById('scheduleError');
    
    if (!scheduleInput || !scheduleError) return true;
    
    const scheduleValue = scheduleInput.value;
    
    if (!scheduleValue) {
        scheduleError.style.display = 'none';
        return true;
    }
    
    const scheduledDate = new Date(scheduleValue);
    const hours = scheduledDate.getHours();
    const minutes = scheduledDate.getMinutes();
    
    // Validar horário (9:30 - 17:30)
    const totalMinutes = hours * 60 + minutes;
    const minTime = 9 * 60 + 30; // 9:30
    const maxTime = 17 * 60 + 30; // 17:30
    
    if (totalMinutes < minTime || totalMinutes > maxTime) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = 'Horários disponíveis: 9:30 às 17:30';
        scheduleInput.value = '';
        return false;
    }
    
    // Validar data (até 5 dias após hoje)
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    const dataAgendamento = new Date(scheduledDate);
    dataAgendamento.setHours(0, 0, 0, 0);
    
    const diffTime = dataAgendamento - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = 'Não é possível agendar para datas passadas';
        scheduleInput.value = '';
        return false;
    }
    
    if (diffDays > 5) {
        scheduleError.style.display = 'block';
        scheduleError.textContent = 'Agendamentos disponíveis apenas até 5 dias após hoje';
        scheduleInput.value = '';
        return false;
    }
    
    scheduleError.style.display = 'none';
    return true;
}

// ========== INICIALIZAÇÃO ========== //

document.addEventListener('DOMContentLoaded', function() {
    updateStatus();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    document.getElementById('header').style.display = 'block';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    document.getElementById('orderConfirmation').style.display = 'none';
    document.getElementById('btnAbrirAssistente').style.display = 'none';
    document.getElementById('assistente').style.display = 'none';
    
    // Configurar campo de agendamento quando o checkout for aberto
    const checkoutPage = document.getElementById('checkoutPage');
    if (checkoutPage) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (checkoutPage.style.display === 'block') {
                        setupScheduleInput();
                    }
                }
            });
        });
        
        observer.observe(checkoutPage, { attributes: true });
    }

    // Formatação de Telefone (11) 99215-6300
    const phoneInput = document.getElementById('checkoutPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 10) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            } else if (value.length > 6) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else if (value.length > 2) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length > 0) {
                e.target.value = `(${value}`;
            } else {
                e.target.value = value;
            }
        });
    }
});
