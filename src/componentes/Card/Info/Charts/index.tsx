import {XAxis,YAxis, Bar, BarChart,Tooltip,ResponsiveContainer } from "recharts"

// estou mudando manualmente os nome no data, depois automatizar isso quando pegar os dados do fetch
const data = [
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "atk",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "def",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "satk",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "sdef",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "spd",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
]

const Chart = ({cor}:{cor:string})=>{
    return(
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart
             width={400} 
             height={400} 
             data={data} 
             layout="vertical"
             margin={{
                top: 0,
                right: 20,
                left: 0,
                bottom: 30,
                // procurar alterar tbm pq o conteudo esta vazando ainda meu patrão 
             }}
             barSize={10}
            >
            <Bar background={{ fill: '#eee' }} fill={`var(--${cor}-color)`} dataKey="base_stat" />
            <XAxis hide type="number" />
            <YAxis type="category" dataKey="stat.name" />
            <Tooltip cursor={false} />
            </BarChart>
        </ResponsiveContainer>
        // apos usar o responsiveContainer o elemento pai tem que ter pelo menos o height dele especificado em medida absoluta 
    )    
}

export default Chart