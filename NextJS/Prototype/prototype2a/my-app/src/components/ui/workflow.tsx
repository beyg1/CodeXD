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
    id: 'sap',
    position: { x: 500, y: 20 },
    data: { label: 'SAP' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'zendesk',
    position: { x: 700, y: 20 },
    data: { label: 'Zendesk' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  
  // Core Process Nodes
  {
    id: 'memory',
    position: { x: 500, y: 170 },
    data: { label: 'Memory' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'planStep',
    position: { x: 350, y: 320 },
    data: { label: 'Plan Step' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'executeStep',
    position: { x: 650, y: 320 },
    data: { label: 'Execute Step' },
    className: getNodeClassName('dark:bg-gray-700 rounded-lg px-3 py-2 sm:px-6 sm:py-3'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'planTask',
    position: { x: 500, y: 470 },
    data: { label: 'Plan Task' },
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
    data: { label: 'App/Trigger/SDK' },
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
    id: 'gmail',
    position: { x: 500, y: 620 },
    data: { label: 'Gmail' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
  {
    id: 'freshdesk',
    position: { x: 700, y: 620 },
    data: { label: 'Freshdesk' },
    className: getNodeClassName('dark:bg-gray-800 rounded-full px-2 py-1 sm:px-4 sm:py-2'),
    style: { backgroundColor: 'rgba(24,24,27,0.5)', color: 'white' },
  },
];

const initialEdges: Edge[] = [
  // Top connections
  { id: 'notion-memory', source: 'notion', target: 'memory', animated: true, type: 'smoothstep' },
  { id: 'sap-memory', source: 'sap', target: 'memory', animated: true, type: 'smoothstep' },
  { id: 'zendesk-memory', source: 'zendesk', target: 'memory', animated: true, type: 'smoothstep' },
  
  // Core process connections
  { id: 'memory-planStep', source: 'memory', target: 'planStep', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'planStep-executeStep', source: 'planStep', target: 'executeStep', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'executeStep-memory', source: 'executeStep', target: 'memory', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'tools-planStep', source: 'tools', target: 'planStep', animated: true, type: 'smoothstep', className: 'text-xs sm:text-sm' },
  { id: 'executeStep-appTrigger', source: 'executeStep', target: 'appTrigger', animated: true, type: 'smoothstep',  className: 'text-xs sm:text-sm' },
  { id: 'planTask-planStep', source: 'planTask', target: 'planStep', animated: true, type: 'smoothstep', className: 'text-xs sm:text-sm' },
  { id: 'appTrigger-planTask', source: 'appTrigger', target: 'planTask', animated: true, type: 'smoothstep', className: 'text-xs sm:text-sm' },
  
  // Bottom connections
  { id: 'planTask-airtable', source: 'planTask', target: 'airtable', animated: true, type: 'smoothstep' },
  { id: 'planTask-gmail', source: 'planTask', target: 'gmail', animated: true, type: 'smoothstep' },
  { id: 'planTask-freshdesk', source: 'planTask', target: 'freshdesk', animated: true, type: 'smoothstep' },
];

export default function AIWorkflowSection() {
  return (
    <Card className="w-full h-screen p-3 sm:p-6 bg-gradient-to-b from-black via-black to-purple-900">      
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
            preventScrolling={true}
            className="bg-transparent"
            fitView
            minZoom={0.2}
            maxZoom={1}
            proOptions={{ hideAttribution: true }}
          >
           
          </ReactFlow>
        </div>
      </div>
    </Card>
  );
}