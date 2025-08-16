import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { BookOpen, Calculator, Atom, Cog, Target, ChevronRight, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const subjects = [
    {
      id: 'matematica',
      name: 'Matemática Avançada',
      icon: Calculator,
      description: 'Cálculo, Álgebra Linear, EDO e EDP com progressão estruturada',
      color: 'bg-blue-500',
      exercises: [
        {
          title: 'Limite Fundamental',
          topic: 'Cálculo Diferencial',
          difficulty: 'Médio',
          problem: 'Calcule o limite: lim(x→0) [sin(3x)/(2x)]',
          solution: `
**Passo 1:** Reescrever a expressão para aplicar o limite fundamental
lim(x→0) [sin(3x)/(2x)] = lim(x→0) [sin(3x)/(3x)] · [3x/(2x)]

**Passo 2:** Simplificar a segunda fração
= lim(x→0) [sin(3x)/(3x)] · (3/2)

**Passo 3:** Aplicar o limite fundamental
Como lim(x→0) [sin(3x)/(3x)] = 1
= 1 · (3/2) = 3/2

**Resposta:** 3/2
          `
        },
        {
          title: 'Derivada de Função Composta',
          topic: 'Cálculo Diferencial',
          difficulty: 'Médio',
          problem: 'Encontre a derivada de f(x) = sin(x² + 3x)',
          solution: `
**Passo 1:** Identificar as funções
- Função externa: f(u) = sin(u), onde u = x² + 3x
- Função interna: g(x) = x² + 3x

**Passo 2:** Calcular as derivadas
- f'(u) = cos(u)
- g'(x) = 2x + 3

**Passo 3:** Aplicar a regra da cadeia
f'(x) = cos(x² + 3x) · (2x + 3)

**Resposta:** f'(x) = (2x + 3)cos(x² + 3x)
          `
        },
        {
          title: 'Determinante de Matriz 3x3',
          topic: 'Álgebra Linear',
          difficulty: 'Médio',
          problem: 'Calcule o determinante da matriz A = [[2,1,3],[0,4,1],[1,2,0]]',
          solution: `
**Passo 1:** Aplicar a fórmula do determinante (expansão por cofatores na primeira linha)
det(A) = 2·|4 1; 2 0| - 1·|0 1; 1 0| + 3·|0 4; 1 2|

**Passo 2:** Calcular os determinantes 2x2
- |4 1; 2 0| = 4·0 - 1·2 = -2
- |0 1; 1 0| = 0·0 - 1·1 = -1  
- |0 4; 1 2| = 0·2 - 4·1 = -4

**Passo 3:** Substituir e calcular
det(A) = 2(-2) - 1(-1) + 3(-4) = -4 + 1 - 12 = -15

**Resposta:** det(A) = -15
          `
        }
      ]
    },
    {
      id: 'fisica',
      name: 'Física Aplicada',
      icon: Atom,
      description: 'Mecânica, Eletromagnetismo e Termodinâmica em profundidade',
      color: 'bg-green-500',
      exercises: [
        {
          title: 'Dinâmica - Segunda Lei de Newton',
          topic: 'Mecânica',
          difficulty: 'Médio',
          problem: 'Um bloco de massa 5 kg está sobre uma superfície horizontal com coeficiente de atrito cinético μ = 0,3. Uma força horizontal de 30 N é aplicada ao bloco. Calcule a aceleração do bloco. (g = 10 m/s²)',
          solution: `
**Passo 1:** Identificar as forças
- Força aplicada: F = 30 N (horizontal)
- Peso: P = mg = 5 × 10 = 50 N (vertical, para baixo)
- Normal: N = P = 50 N (vertical, para cima)
- Atrito: f = μN = 0,3 × 50 = 15 N (horizontal, oposta ao movimento)

**Passo 2:** Aplicar a Segunda Lei de Newton na direção horizontal
F_resultante = F_aplicada - f_atrito = 30 - 15 = 15 N

**Passo 3:** Calcular a aceleração
F = ma → 15 = 5 × a → a = 3 m/s²

**Resposta:** A aceleração do bloco é 3 m/s².
          `
        },
        {
          title: 'Lei de Coulomb',
          topic: 'Eletromagnetismo',
          difficulty: 'Médio',
          problem: 'Duas cargas puntiformes q₁ = +4 μC e q₂ = -6 μC estão separadas por uma distância de 30 cm no vácuo. Calcule a força elétrica entre elas. (k = 9 × 10⁹ N⋅m²/C²)',
          solution: `
**Passo 1:** Identificar os dados
- q₁ = +4 μC = +4 × 10⁻⁶ C
- q₂ = -6 μC = -6 × 10⁻⁶ C
- r = 30 cm = 0,3 m
- k = 9 × 10⁹ N⋅m²/C²

**Passo 2:** Aplicar a Lei de Coulomb
F = k|q₁||q₂|/r²

**Passo 3:** Substituir os valores
F = 9×10⁹ × (4×10⁻⁶ × 6×10⁻⁶)/(0,3)²
F = 9×10⁹ × (24×10⁻¹²)/(0,09) = 0,024 N

**Passo 4:** Determinar a direção
Como as cargas têm sinais opostos, a força é atrativa.

**Resposta:** A força elétrica é de 0,024 N (atrativa).
          `
        }
      ]
    },
    {
      id: 'engenharia',
      name: 'Engenharia Mecânica',
      icon: Cog,
      description: 'Disciplinas específicas com foco em aplicações práticas',
      color: 'bg-orange-500',
      exercises: [
        {
          title: 'Tensão Normal',
          topic: 'Mecânica dos Sólidos',
          difficulty: 'Médio',
          problem: 'Uma barra de aço com seção transversal circular de diâmetro 20 mm está submetida a uma força axial de tração de 15 kN. Calcule a tensão normal na barra.',
          solution: `
**Passo 1:** Identificar os dados
- Diâmetro: d = 20 mm = 0,02 m
- Força axial: F = 15 kN = 15.000 N

**Passo 2:** Calcular a área da seção transversal
Para seção circular: A = πd²/4 = π(0,02)²/4 = 3,14 × 10⁻⁴ m²

**Passo 3:** Calcular a tensão normal
σ = F/A = 15.000/(3,14 × 10⁻⁴) = 47,8 × 10⁶ Pa = 47,8 MPa

**Resposta:** A tensão normal na barra é 47,8 MPa.
          `
        },
        {
          title: 'Dimensionamento de Eixo',
          topic: 'Projeto de Máquinas',
          difficulty: 'Difícil',
          problem: 'Um eixo circular maciço de aço (τ_adm = 80 MPa) deve transmitir uma potência de 50 kW a 1200 rpm. Calcule o diâmetro mínimo necessário para o eixo.',
          solution: `
**Passo 1:** Identificar os dados
- Potência: P = 50 kW = 50.000 W
- Rotação: n = 1200 rpm
- Tensão admissível: τ_adm = 80 MPa = 80 × 10⁶ Pa

**Passo 2:** Calcular o torque transmitido
T = 60P/(2πn) = (60 × 50.000)/(2π × 1200) = 398 N⋅m

**Passo 3:** Aplicar a fórmula da tensão de cisalhamento
Para eixo circular maciço: τ = 16T/(πd³)

**Passo 4:** Resolver para o diâmetro
d³ = 16T/(πτ_adm) = (16 × 398)/(π × 80 × 10⁶) = 2,53 × 10⁻⁵
d = ∛(2,53 × 10⁻⁵) = 0,0294 m = 29,4 mm

**Passo 5:** Adotar diâmetro comercial
Adotando um fator de segurança, o diâmetro mínimo seria 30 mm.

**Resposta:** O diâmetro mínimo necessário é 30 mm.
          `
        }
      ]
    }
  ]

  const ExerciseCard = ({ exercise, subjectColor }) => {
    const [showSolution, setShowSolution] = useState(false)
    
    const getDifficultyColor = (difficulty) => {
      switch(difficulty) {
        case 'Fácil': return 'bg-green-100 text-green-800'
        case 'Médio': return 'bg-yellow-100 text-yellow-800'
        case 'Difícil': return 'bg-red-100 text-red-800'
        default: return 'bg-gray-100 text-gray-800'
      }
    }

    return (
      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{exercise.title}</CardTitle>
              <CardDescription className="mt-1">{exercise.topic}</CardDescription>
            </div>
            <Badge className={getDifficultyColor(exercise.difficulty)}>
              {exercise.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">PROBLEMA:</h4>
              <p className="text-sm leading-relaxed">{exercise.problem}</p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setShowSolution(!showSolution)}
              className="w-full"
            >
              {showSolution ? 'Ocultar Solução' : 'Ver Solução Passo a Passo'}
              <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${showSolution ? 'rotate-90' : ''}`} />
            </Button>
            
            {showSolution && (
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-sm text-gray-600 mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  SOLUÇÃO DETALHADA:
                </h4>
                <div className="text-sm leading-relaxed whitespace-pre-line">
                  {exercise.solution}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  const SubjectSection = ({ subject }) => (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className={`p-3 rounded-lg ${subject.color} text-white`}>
          <subject.icon className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{subject.name}</h2>
          <p className="text-gray-600">{subject.description}</p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {subject.exercises.map((exercise, index) => (
          <ExerciseCard 
            key={index} 
            exercise={exercise} 
            subjectColor={subject.color}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="h-8 w-8" />
              <h1 className="text-3xl font-bold">Guia de Estudo: Engenharia Mecânica</h1>
            </div>
            <p className="text-blue-100">Preparação com padrões de excelência do ITA - Exercícios Práticos</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-2">
            <Button
              variant={activeSection === 'inicio' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('inicio')}
              className="whitespace-nowrap"
            >
              Início
            </Button>
            <Button
              variant={activeSection === 'exercicios' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('exercicios')}
              className="whitespace-nowrap"
            >
              Exercícios Práticos
            </Button>
            <Button
              variant={activeSection === 'metodologia' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('metodologia')}
              className="whitespace-nowrap"
            >
              Metodologia
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'inicio' && (
          <div className="space-y-8">
            <div className="text-center">
              <Target className="h-16 w-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Bem-vindo ao Guia de Estudo</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Este guia foi desenvolvido com base nos padrões de excelência do Instituto Tecnológico de Aeronáutica (ITA) 
                para preparar estudantes nas áreas básicas da Engenharia Mecânica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setActiveSection('exercicios')}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${subject.color} text-white`}>
                        <subject.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                    </div>
                    <CardDescription>{subject.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-2">
                      {subject.exercises.length} exercícios disponíveis
                    </Badge>
                    <Button variant="outline" className="w-full">
                      Ver Exercícios
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Como usar este guia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-blue-700">
                  <p>• <strong>Exercícios Práticos:</strong> Resolva problemas reais com soluções passo a passo</p>
                  <p>• <strong>Níveis de Dificuldade:</strong> Problemas classificados como Fácil, Médio ou Difícil</p>
                  <p>• <strong>Explicações Detalhadas:</strong> Cada exercício inclui solução completa com justificativas</p>
                  <p>• <strong>Padrão ITA:</strong> Exercícios baseados no nível de excelência do instituto</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'exercicios' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Exercícios Práticos</h2>
              <p className="text-gray-600">
                Resolva exercícios práticos com soluções detalhadas passo a passo. 
                Cada problema foi cuidadosamente selecionado para desenvolver suas habilidades.
              </p>
            </div>

            <Tabs defaultValue="matematica" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="matematica" className="flex items-center space-x-2">
                  <Calculator className="h-4 w-4" />
                  <span>Matemática</span>
                </TabsTrigger>
                <TabsTrigger value="fisica" className="flex items-center space-x-2">
                  <Atom className="h-4 w-4" />
                  <span>Física</span>
                </TabsTrigger>
                <TabsTrigger value="engenharia" className="flex items-center space-x-2">
                  <Cog className="h-4 w-4" />
                  <span>Engenharia</span>
                </TabsTrigger>
              </TabsList>

              {subjects.map((subject) => (
                <TabsContent key={subject.id} value={subject.id}>
                  <SubjectSection subject={subject} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}

        {activeSection === 'metodologia' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Metodologia Eficiente</h2>
              <p className="text-lg text-gray-600">
                Estratégias de estudo testadas e aprovadas para maximizar seu aprendizado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resolução de Exercícios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Leia o problema com atenção e identifique os dados</p>
                  <p>• Desenhe diagramas quando necessário</p>
                  <p>• Aplique os conceitos teóricos passo a passo</p>
                  <p>• Verifique se a resposta faz sentido fisicamente</p>
                  <p>• Compare com a solução fornecida</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progressão de Estudos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Comece pelos exercícios mais simples</p>
                  <p>• Domine os fundamentos antes de avançar</p>
                  <p>• Pratique regularmente, não apenas antes das provas</p>
                  <p>• Refaça exercícios que tiveram dificuldade</p>
                  <p>• Busque entender o "porquê" de cada passo</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dicas para Provas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Gerencie bem seu tempo durante a prova</p>
                  <p>• Comece pelos exercícios que tem mais confiança</p>
                  <p>• Mostre todos os passos da resolução</p>
                  <p>• Use unidades corretas em todos os cálculos</p>
                  <p>• Revise suas respostas se sobrar tempo</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recursos Adicionais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Consulte livros de referência para teoria</p>
                  <p>• Forme grupos de estudo com colegas</p>
                  <p>• Tire dúvidas com professores</p>
                  <p>• Use simuladores quando disponíveis</p>
                  <p>• Mantenha um caderno de fórmulas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Guia de Estudo: Engenharia Mecânica - Padrões ITA
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Desenvolvido para preparação acadêmica de excelência
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

