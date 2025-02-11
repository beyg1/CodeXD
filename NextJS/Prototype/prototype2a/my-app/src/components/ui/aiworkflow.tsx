"use client";

import React from 'react';
import  {
  ReactFlow,
  Node,
  Edge,
  ConnectionLineType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card } from '@/components/ui/card';

const getNodeClassName = (baseClass: string) => {
  return `${baseClass} text-sm sm:text-base`;
};

const initialNodes: Node[] = [
  // External Services (Top)
  {
    id: 'notion',
    position: { x: 300, y: 20 },
    data: { label: 'Notion' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'zapier',
    position: { x: 500, y: 20 },
    data: { label: 'Zapier' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'slack',
    position: { x: 700, y: 20 },
    data: { label: 'Slack' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  
  // Core Process Nodes
  {
    id: 'agent',
    position: { x: 500, y: 170 },
    data: { label: 'Agent' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'llm1',
    position: { x: 350, y: 320 },
    data: { label: 'LLM Call 1' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'llm2',
    position: { x: 650, y: 320 },
    data: { label: 'LLM Call 2' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'execTask',
    position: { x: 500, y: 470 },
    data: { label: 'Execute Task' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'tools',
    position: { x: 150, y: 320 },
    data: { label: 'Tools' },
    className: getNodeClassName('dark:bg-gray-800 rounded-lg px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'appTrigger',
    position: { x: 850, y: 320 },
    data: { label: 'Trigger Task' },
    className: getNodeClassName('bg-white dark:bg-gray-900 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  
  // External Services (Bottom)
  {
    id: 'airtable',
    position: { x: 300, y: 620 },
    data: { label: 'Airtable' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'workato',
    position: { x: 500, y: 620 },
    data: { label: 'Workato' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'uipath',
    position: { x: 700, y: 620 },
    data: { label: 'UiPath' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
];

const initialEdges: Edge[] = [
  // Top connections
  { id: 'notion-agent', source: 'notion', target: 'agent', animated: true, type: 'smoothstep' },
  { id: 'zapier-agent', source: 'zapier', target: 'agent', animated: true, type: 'smoothstep' },
  { id: 'slack-agent', source: 'slack', target: 'agent', animated: true, type: 'smoothstep' },
  
  // Core process connections
  { id: 'agent-llm1', source: 'agent', target: 'llm1', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'llm1-llm2', source: 'llm1', target: 'llm2', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'llm2-agent', source: 'llm2', target: 'agent', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'tools-llm1', source: 'tools', target: 'llm1', animated: true, type: 'smoothstep', className: 'text-xs sm:text-sm' },  
  { id: 'llm2-appTrigger', source: 'llm2', target: 'appTrigger', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'execTask-planStep', source: 'execTask', target: 'planStep', animated: true, type: 'smoothstep', className: 'text-xs sm:text-sm' },
  { id: 'appTrigger-execTask', source: 'appTrigger', target: 'execTask', animated: true, type: 'smoothstep', className: 'text-xs sm:text-sm' },
  
  // Bottom connections
  { id: 'execTask-airtable', source: 'execTask', target: 'airtable', animated: true, type: 'smoothstep' },
  { id: 'execTask-workato', source: 'execTask', target: 'workato', animated: true, type: 'smoothstep' },
  { id: 'execTask-uipath', source: 'execTask', target: 'uipath', animated: true, type: 'smoothstep' },
];

export default function AIWorkflow() {
  return (
    <div className="w-full h-screen">      
      <div className="w-full h-[calc(100%-100px)] sm:h-[calc(100%-120px)] flex items-center justify-center">
        <div className="w-full sm:w-[1000px] h-[500px] sm:h-[700px]">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            connectionLineType={ConnectionLineType.SmoothStep}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            panOnScroll={false}
            panOnDrag={false} 
            preventScrolling={false}
            className="bg-transparent"
            fitView
            minZoom={0.2}
            maxZoom={1}
            proOptions={{ hideAttribution: true }}
          >
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}